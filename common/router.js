'use strict'
const EventEmmiter = require('events').EventEmitter
const NotFoundError = require('restify-errors').NotFoundError

class Router extends EventEmmiter {

    envelope(document) {
        return document
    }

    render(resp, next, document, status) {           
            if(document) {
                this.emit('beforeRender', document)
                resp.status(status)
                resp.send(document)
            } else {
                throw new NotFoundError('Document Not Found')
            }           
            return next()
        }
    }

module.exports = Router