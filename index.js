const express = require('express');
const config = require('config-lite');
const path = require('path');
const pkg = require('./package');


require('./model');

//user defind
const routes = require('./routers');

let app = express();

//添加静态文件地址
app.use(express.static(path.join(__dirname, 'public')));

routes(app);

app.listen(config.port, () => {
	console.log(`${pkg.name} listening on port ${config.port}`);
});