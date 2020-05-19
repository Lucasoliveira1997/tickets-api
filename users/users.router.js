'use strict'
const User = require('./users.model')
const errors = require('restify-errors')

module.exports = server => {  
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