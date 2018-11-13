module.exports = function(app) {
	app.get('/formulario_inclusao', (req, res) => {
		res.render('admin/form_add_noticia')
	})
}