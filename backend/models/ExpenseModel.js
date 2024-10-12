"use strict"
/* -------------------------------------------------------
    EXPENSE TRACKER APP
------------------------------------------------------- */

const mongoose = require('mongoose')

const ExpenseSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        trim: true,
        maxLenght: 50
    },

    amount: {
        type: Number,
        required: true,
        trim: true,
        maxLenght: 20
    },

    type: {
        type: String,
        default: "expense"
    },

    date: {
        type: Date,
        required: true,
        trim: true,
    },

    category: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        required: true,
        trim: true,
        maxLenght: 20
    },

}, {timestamps: true})

module.exports = mongoose.model('Expense', ExpenseSchema)