// Porta para o servidor
const PORT = 4000

var app = require('./config/server')
var color = require('colors')


// Rotas
var rotaNoticias = require('./app/routes/noticias')(app)
var rotaHome = require('./app/routes/home')(app)
var rotaForm = require('./app/routes/formulario_inclusao_noticia')(app)


app.listen(PORT, () => {
	console.log('Servidor Rodando com Sucesso na porta '.green.bold.underline, PORT)
})