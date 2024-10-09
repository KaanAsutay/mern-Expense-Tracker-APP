"use strict"
/* -------------------------------------------------------
    EXPENSE TRACKER APP
------------------------------------------------------- */
const express = require('express')
const cors = require('cors')
const {readdirSync} = require('fs')
const app = express()

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require('dotenv').config()
const HOST = process.env?.HOST || '127.0.0.1'
const PORT = process.env?.PORT || 8000


/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { db } = require('./db/db.js')
db()

/* ------------------------------------------------------- */
// middlewares
app.use(express.json())
app.use(cors())
/* ------------------------------------------------------- */


/* ------------------------------------------------------- */
// routes
readdirSync('./routes')
    .map((route) => app.use('/api/v1', require('./routes/' + route)))
/* ------------------------------------------------------- */


/* ------------------------------------------------------- */
// RUN SERVER:
app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}`))
