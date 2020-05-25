'use strict'
const EventEmmiter = require('events').EventEmitter
const NotFoundError = require('restify-errors').NotFoundError

class Router extends EventEmmiter {

    render(resp, next, document) {           
            if(document) {
                this.emit('beforeRender', document)
                resp.json(document)
            } else {
                throw new NotFoundError('Document Not Found')
            }           
            return next() 
        }
    }

module.exports = Router