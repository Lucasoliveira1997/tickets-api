'use strict'

const mongoose = require('mongoose')
const objectId = mongoose.Types.ObjectId

const ticketSchema = new mongoose.Schema({
    user: {type: objectId, required: true},
    about: {type: String, required: true, enum: ['pc', 'notebook', 'printer', 'smartphone', 'datasul']},
    description: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Ticket', ticketSchema)