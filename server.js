const express = require('express');

const app = express()

app.get(
    '/',
    (req, res) => {
        console.log("hi from me")
        res.status(200)
        res.json({message: 'hello'})
    }
)
module.exports = app