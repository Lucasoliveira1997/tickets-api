'use strict'

const errors = require('restify-errors')
const mongoose = require('mongoose')
const Ticket = require('./tickets.model')

module.exports = server => {
    server.post('/tickets', async(req, resp, next) => {
        if(!req.is('application/json')) {
            return next(new errors.InvalidContentError("Expects 'application/json"))
        }
        
        const { user, about, description } = req.body

        try {
            const ticket = await new Ticket({user, about, description})
            const newTicket = ticket.save()
            resp.status(201)
            resp.send(newTicket)
            return next()
        } catch (error) {
            return next(new errors.InternalError(error.message))
        }
    })

    server.get('/tickets', async(req, resp, next) => {
        try {
            const ticket = await Ticket.find({})
            resp.status(200)
            resp.send(ticket)
            return next()

        } catch (error) {
            return next(new errors.InvalidContentError(error.message))
        }
    })
    server.get('/tickets/:id', async(req, resp, next) => {
        try {
            const ticket = await Ticket.findById(req.params.id)
            resp.status(200)
            resp.send(ticket)
            return next()
        } catch (error) {
            return next(new errors.InvalidContentError(error.message))
        }
    })
    server.put('/tickets/:id', async(req, resp, next) => {
        try {
            const options = {new: true}
            const ticketUpdated = await Ticket.findByIdAndUpdate(req.params.id, req.body, options)
            resp.status(200)
            resp.send(ticketUpdated)
            return next()
        } catch (error) {
            return next(new errors.InvalidContentError(error.message))
        }
    })
    server.del('/tickets/:id', async(req, resp, next) => {
        try {
            await Ticket.findByIdAndRemove(req.params.id)
            resp.send(204)
            return next()
        } catch (error) {
            return next(new errors.InvalidContentError(error.message))
        }
    })
}