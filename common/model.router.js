'use strict'

const Router = require('./router')
const errors = require('restify-errors')
const mongoose = require('mongoose')

class ModelRouter extends Router {
    constructor(model) {
        super(Router)
        this._model = mongoose.model(model)

        this.get = async (req, resp, next) => {
            try {
                const document = await this._model.find({})
                return this.render(resp, next, document)
            } catch (error) {
                next(new errors.NotFoundError('Document Not Found'))
            }
        }

        this.getById = async (req, resp, next) => {
            try {
                const document = await this._model.findById(req.params.id)
                await this.render(resp, next, document)
            } catch (error) {
                return next(new errors.InvalidContentError(error.message))
            }
        }

        this.save = async (req, resp, next) => {
            if (!req.is('application/json')) {
                return next(new errors.InvalidContentError("Expects 'application/json'"))
            }

            try {
                const model = await new this._model(req.body)
                const document = await model.save()
                await this.render(resp, next, document)
            } catch (error) {
                return next(new errors.InternalError(error.message))
            }
        }

        this.update = async (req, resp, next) => {
            try {
                const options = { new: true }
                const document = await this._model.findByIdAndUpdate(req.params.id, req.body, options)
                await this.render(resp, next, document)
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