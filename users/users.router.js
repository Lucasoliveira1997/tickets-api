'use strict'
require('./users.model')
const _modelRouter = require('../common/model.router')
const modelRouter = new _modelRouter('User')

const auth = require('../middlewares/authentication')

module.exports = server => {
    server.post(`${modelRouter.basePath}/auth`, modelRouter.authenticate)

    server.post(`${modelRouter.basePath}`, modelRouter.save)

    server.get(`${modelRouter.basePath}`, /*auth,*/ modelRouter.get)

    server.get(`${modelRouter.basePath}/:id`, /*auth,*/ modelRouter.getById)

    server.put(`${modelRouter.basePath}/:id`, /*auth,*/ modelRouter.update)

    server.del(`${modelRouter.basePath}/:id`, /*auth,*/ modelRouter.delete)
}