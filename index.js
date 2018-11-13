const PORT = 4000
var app = require('./config/server')
var color = require('colors')
var rotaNoticias = require('./app/routes/noticias')(app)

app.listen(PORT, () => {
	console.log('Servidor Rodando com Sucesso na porta '.green.bold.underline, PORT)
})