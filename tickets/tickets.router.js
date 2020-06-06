'use strict'

require('./tickets.model')
const errors = require('restify-errors')
const mongoose = require('mongoose')
const _modelRouter = require('../common/model.router')
const modelRouter = new _modelRouter('Ticket')

module.exports = server => {
    server.post('/tickets', modelRouter.save)

    server.get('/tickets', modelRouter.get)

    server.get('/tickets/:id', modelRouter.getById)

    server.put('/tickets/:id', modelRouter.update)

    server.del('/tickets/:id', modelRouter.delete)
}