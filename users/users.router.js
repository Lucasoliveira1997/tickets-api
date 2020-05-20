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
            next()
        } catch (error) {
            next(new errors.InternalError(error.message))
        }
    })

    server.get('/users', async (req, resp, next) => {
        try {
            const users = await User.find({})
            resp.send(users)
            next()
        } catch (error) {
            return next(new errors.InvalidContentError(err))
        }
    })
}