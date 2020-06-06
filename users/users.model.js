'use strict'

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {
        type: String, 
        required: true, 
        unique: true, 
        lowercase: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    },
    password: {type: String, required: true},
    department: {type: String, required: true, enum: ['ti', 'rh', 'compras', 'fiscal']},
    phone: {type: String, required: true},
    status: {type: Boolean, required: true},
    category: {type: String, required: true, enum: ['user', 'admin']},
    createdAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('User', userSchema)