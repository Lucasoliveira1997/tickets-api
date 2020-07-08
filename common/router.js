'use strict'
const EventEmmiter = require('events').EventEmitter
const NotFoundError = require('restify-errors').NotFoundError

class Router extends EventEmmiter {

    envelope(document) {
        return document
    }

    envelopeAll(documents) {
        return documents
    }

    render(resp, next, document, status) {
        if (document) {
            resp.status(status)
            resp.send(this.envelope(document))
        } else {
            throw new NotFoundError('Document Not Found')
        }
        return next()
    }

    renderAll(resp, next, documents, status) {
        if(documents) {
            documents.forEach((document, index, array) => {
                array[index] = this.envelope(document)
            })
        resp.json(this.envelopeAll(documents))
        } else {
            resp.json(this.envelopeAll([]))
        }
        return next()
    }
}

module.exports = Router