// variavel que recebe o drive do mysql
var mysql = require('mysql');
module.exports = () => {
	// variavel que recebe a conexao com o banco
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		passsword : '',
		database : 'portalnode'
	})
}