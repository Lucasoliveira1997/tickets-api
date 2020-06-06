'use strict'
require('./users.model')

const _modelRouter = require('../common/model.router')
const modelRouter = new _modelRouter('User')

module.exports = server => {
    server.post('/users', modelRouter.save)

    server.get('/users', modelRouter.get)

    server.get('/users/:id', modelRouter.getById)

    server.put('/users/:id', modelRouter.update)

    server.del('/users/:id', modelRouter.remove)
}