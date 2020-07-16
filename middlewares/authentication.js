'use strict'

const jwt = require('jsonwebtoken')
const environment = require('../common/environment')

module.exports = (req, resp, next) => {
    const token = req.headers['x-access-token']

    if(token) {
        try {
            jwt.verify(token, environment.security.publicKey)
            next()

        } catch (error) {
            resp.status(400)
            resp.send({message: 'Token Inválido'})
        }
    } else {
        resp.status(403)
        return resp.send({message: 'Acesso Negado!'})
    }
}