/*
	引用所有的文件，处理路由，并导出多有路由
 */
module.exports = (app) => {
	app.get('/', (req, res) => {
		res.redirect('/aritcle');
	});
	//article
	app.use('/aritcle', require('./article'));
	//user
	app.use('/user', require('./user'));
	//comment
	app.use('/comment', require('./comment'));
	//404
	app.use((req, res) => {
		if (!res.headersSent) {
			res.status(404).render('404');
		}
	});
}