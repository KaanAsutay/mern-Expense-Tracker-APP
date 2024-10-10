"use strict"
/* -------------------------------------------------------
    EXPENSE TRACKER APP
------------------------------------------------------- */
const IncomeSchema = require("../models/incomeModel")

exports.addIncome = async (req, res) => {
    const {
        title, 
        amount, 
        category, 
        description, 
        date
    } = req.body

    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        
        // validations
        if(!title || !category || !description || !date) {
            return res.status(400).json({message: 'All fields are required!'})
        }

        if(amount <= 0 || !amount === 'number') {
            return res.status(400).json({message: 'Amount must be a positive'})
        }

        await income.save()

        res.status(200).json({
            error: false,
            message: 'Income Added'
        })
    } catch (error) {
        res.status(500).json({
            error: true,
            message: 'Server Error'
        })
    }

    console.log(income)
};