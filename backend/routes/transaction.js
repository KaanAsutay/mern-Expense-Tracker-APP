"use strict"
/* -------------------------------------------------------
    EXPENSE TRACKER APP
------------------------------------------------------- */
// const { model } = require('mongoose')

const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('Hello World')
})

module.exports = router