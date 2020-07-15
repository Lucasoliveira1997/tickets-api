'use strict'

const Router = require('./router')
const errors = require('restify-errors')
const mongoose = require('mongoose')
const md5 = require('md5')
const jwt = require('jsonwebtoken')
const environment = require('./environment')

class ModelRouter extends Router {
    constructor(model) {
        super(Router)
        this._model = mongoose.model(model)
        this.basePath = `/${this._model.collection.name}`

        this.authenticate = async (req, resp, next) => {
            try {
                let login = {}

                if (req.body.email) {
                    login = { email: req.body.email }

                    let userAuthenticated = await this._model.findOne(login)

                    resp.status(200)
                    resp.send({
                        login: {
                            user: userAuthenticated,
                            token: jwt.sign({ userAuthenticated }, environment.security.publicKey)
                        }
                    })
                } else {
                    resp.status(400)
                    resp.send({ message: 'Usuário ou senha incorretos' })
                }

            } catch (error) {
                return next(new errors.ForbiddenError(error))
            }
        }

        this.get = async (req, resp, next) => {
            try {
                const documents = await this._model.find()
                await this.render(resp, next, documents, 200)

            } catch (error) {
                return next(new errors.InvalidContentError(error))
            }
        }

        this.getById = async (req, resp, next) => {
            try {
                const document = await this._model.findById(req.params.id)
                await this.render(resp, next, document, 200)

            } catch (error) {
                return next(new errors.InvalidContentError(error))
            }
        }
        this.save = async (req, resp, next) => {
            if (!req.is('application/json')) {
                return next(new errors.InvalidContentError("Expects 'application/json'"))
            }

            try {
                if (req.body.password) {
                    req.body.password = md5(req.body.password)
                }
                const model = await new this._model(req.body)
                const document = await model.save()
                await this.render(resp, next, document, 201)
            } catch (error) {
                return next(new errors.InvalidContentError(error))
            }
        }

        this.update = async (req, resp, next) => {
            try {
                const options = { new: true }
                if (req.body.password) {
                    req.body.password = md5(req.body.password)
                }
                const document = await this._model.findByIdAndUpdate(req.params.id, req.body, options)
                await this.render(resp, next, document, 202)
                return next()
            } catch (error) {
                return next(new errors.InvalidContentError(error.message))
            }
        }

        this.delete = async (req, resp, next) => {
            try {
                await this._model.findByIdAndRemove(req.params.id)
                resp.send(204)
                return next()
            } catch (error) {
                return next(new errors.InvalidContentError(error.message))
            }
        }
    }
}

module.exports = ModelRouter