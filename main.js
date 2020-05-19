'use strict'

const Server = require('./server/server')
const server = new Server

const userRouter = require('./users/users.router')

server.bootstrap([
                userRouter
            ])
            .then(server => console.log('Server is running on port: ', server.application.address()))
            .catch(error => {
                console.log('Server failed to start')
                console.error(error)
                process.exit(1)                                
            })