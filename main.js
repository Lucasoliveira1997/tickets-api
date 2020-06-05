'use strict'

const Server = require('./server/server')
const server = new Server

//Routes
const userRouter = require('./users/users.router')
const ticketRouter = require('./tickets/tickets.router')

server.bootstrap([
                userRouter,
                ticketRouter
            ])
            .then(server => console.log('Server is running on port: ', server.application.address()))
            .catch(error => {
                console.log('Server failed to start')
                console.error(error)
                process.exit(1)
            })