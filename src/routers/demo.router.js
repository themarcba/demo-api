const express = require('express')
const router = new express.Router()
const os = require('os')

// Create user / Signup
router.get('/random', async (req, res) => {
    try {
        const random = Math.random()
        return res.status(201).send({ random, secret: process.env.SECRET, hostname: os.hostname() })
    } catch (error) {
        res.status(400).send({ error: 'Oh no! An error!', error: error.message })
    }
})

module.exports = router
