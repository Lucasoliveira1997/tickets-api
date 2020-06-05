'use strict'

const Router = require('./router')
const errors = require('restify-errors')
const mongoose = require('mongoose')

class ModelRouter extends Router {
    constructor(model) {
        super(Router)
        this._model = mongoose.model(model)

        this.get = async(req, resp, next) => {
            try {
                const document = await this._model.find({})   
                return this.render(resp, next, document)                    
            } catch (error) {
                next(new errors.NotFoundError('Document Not Found'))
            }
        }
    }
    
}

module.exports = ModelRouter