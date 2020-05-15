'use strict'
const restify = require('restify')
const environment = require('../common/environment')

class Server {
    initRoutes() {        
        return new Promise((resolve, reject) => {
            try {
                this.application = restify.createServer({
                    name: 'tickets-api',
                    version: '1.0.0'
                })
                
                this.application.get('/', (req, resp, next) => {
                    resp.status(200)
                    resp.json({
                        message: 'Welcome!',
                        browser: req.userAgent,
                        method: req.method,
                        path: req.path(),
                        headers: req.headers
                    })                    
                    return next()
                })

                this.application.listen(environment.server.port, () => {
                    resolve(this.application)
                })

            } catch (error) {
                reject(error)
            }
        })
    }

    bootstrap() {
        return this.initRoutes()
                    .then(() => this)
    }
}

module.exports = Server