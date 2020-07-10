'use strict'

const jwt = require('jsonwebtoken')
const environment = require('../common/environment')

module.exports = (req, resp, next) => {
    let token = req.body.token || req.query.query || req.headers['x-access-token']

    if(token) {
        
    } else {
        
    }
}