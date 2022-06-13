const express = require('express')
const { getRange } = require('./currency.controller')

const router = express.Router()
router.post('/', getRange)

module.exports = router