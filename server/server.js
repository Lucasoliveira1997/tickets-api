'use strict'
const restify = require('restify')
const environment = require('../common/environment')
const mongoose = require('mongoose')

class Server {
    initializeDb() {        
          mongoose.Promise = global.Promise
            mongoose.set('useCreateIndex', true)
            mongoose.connection.on('connected', () => console.log('Database is connected'))            
            return mongoose.connect(environment.db.url, environment.db.options)
    }

    initRoutes(routers) {        
        return new Promise((resolve, reject) => {
            try {
                this.application = restify.createServer({
                    name: 'tickets-api',
                    version: '1.0.0'
                })

                this.application.use(restify.plugins.queryParser())
                this.application.use(restify.plugins.bodyParser())

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

                for (let router of routers) {
                    router(this.application)
                }

            } catch (error) {
                reject(error)
            }
        })
    }

    bootstrap(routers = []) {
        return this.initializeDb().then(() => {
            return this.initRoutes(routers).then(() => this)
        })
    }
}

module.exports = Server