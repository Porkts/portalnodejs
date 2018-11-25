var express = require('express')
var app = express()
var consign = require('consign')

// setando configuracoes
app.set('view engine', 'ejs')
app.set('views', './app/views')

consign().include('app/routes').into(app)

// exportando o modulo
module.exports = app