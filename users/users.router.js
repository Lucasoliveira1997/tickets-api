'use strict'
require('./users.model')
const _modelRouter = require('../common/model.router')
const modelRouter = new _modelRouter('User')

const auth = require('./users.auth')

module.exports = server => {
    server.post(`${modelRouter.basePath}`, modelRouter.save)

    server.get(`${modelRouter.basePath}`, modelRouter.get)

    server.get(`${modelRouter.basePath}/:id`, modelRouter.getById)

    server.put(`${modelRouter.basePath}/:id`, modelRouter.update)

    server.del(`${modelRouter.basePath}/:id`, modelRouter.delete)
}