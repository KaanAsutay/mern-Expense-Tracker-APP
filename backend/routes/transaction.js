"use strict"
/* -------------------------------------------------------
    EXPENSE TRACKER APP
------------------------------------------------------- */
// const { model } = require('mongoose')

const router = require('express').Router()

router.post('/add-income', addIncome)

module.exports = router