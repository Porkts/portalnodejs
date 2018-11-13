var express = require('express')
var app = express()

// setando configuracoes
app.set('view engine', 'ejs')
app.set('views', './app/views')

// exportando o modulo
module.exports = app