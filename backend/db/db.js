"use strict"
/* -------------------------------------------------------
    EXPENSE TRACKER APP
------------------------------------------------------- */
const mongoose = require('mongoose')

const db = function () {
    // Connect:
    mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log('* DB Connected * '))
        .catch((err) => console.log('* DB Not Connected * ', err))
}

/* ------------------------------------------------------- */
module.exports = {
    mongoose,
    db
} 