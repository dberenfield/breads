const express = require('express')
const breads = express.Router()

//INDEX
breads.get('/', () => {
    resizeBy.send('This is the index at /breads')
})

module.exports = breads