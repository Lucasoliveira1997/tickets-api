'use strict'

require('./tickets.model')
const errors = require('restify-errors')
const mongoose = require('mongoose')
const _modelRouter = require('../common/model.router')
const modelRouter = new _modelRouter('Ticket')

module.exports = server => {
    server.post(`${modelRouter.basePath}`, modelRouter.save)

    server.get(`${modelRouter.basePath}`, modelRouter.get)

    server.get(`${modelRouter.basePath}/:id`, modelRouter.getById)

    server.put(`${modelRouter.basePath}/:id`, modelRouter.update)

    server.del(`${modelRouter.basePath}/:id`, modelRouter.delete)
}