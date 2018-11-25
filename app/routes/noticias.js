var db = require('../../config/db')()

module.exports = function(app) {
	app.get('/noticias', (req, res) => {

		// recuperando as noticias do banco e passando para o view
		db.query('SELECT * from noticias', (error,result) => {
			res.render('noticias/noticias', {noticias : result})
		});
	})
}