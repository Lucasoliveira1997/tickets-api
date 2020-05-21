'use strict'
const User = require('./users.model')
const errors = require('restify-errors')

module.exports = server => {
    server.post('/users', async (req, resp, next) => {
        if(!req.is('application/json')){
            return next(new errors.InvalidContentError("Expects 'application/json"))
        }

        const {name, email, department, password} = req.body

        try {
            const user = await new User({ name, email, department, password })
            const newUser = await user.save()
            resp.status(201)
            resp.send(newUser)
            return next()
        } catch (error) {
            return next(new errors.InternalError(error.message))
        }
    })

    server.get('/users', async (req, resp, next) => {
        try {
            const users = await User.find({})
            resp.status(200)
            resp.send(users)
            return next()
        } catch (error) {
            return next(new errors.InvalidContentError(error.message))
        }
    })

    server.get('/users/:id', async (req, resp, next) => {
        try {
            const user = await User.findById(req.params.id)                
                resp.status(200)
                resp.send(user)
                return next()
        } catch (error) {
            return next(new errors.InvalidContentError(error.message))
        }
    })

    server.put('/users/:id', async (req, resp, next) => {
        try {
            const options = {new: true}
            const user = await User.findByIdAndUpdate(req.params.id, req.body, options)
            resp.send(user)
            return next()
        } catch (error) {
            return next(new errors.InvalidContentError(error.message))
        }
    })

    server.del('/users/:id', async (req, resp, next) => {
        try {
            await User.findByIdAndRemove(req.params.id)
            resp.send(204)
            return next()
        } catch (error) {
            return next(new errors.InvalidContentError(error.message))
        }
    })
}