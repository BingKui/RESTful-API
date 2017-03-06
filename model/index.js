var mongoose = require('mongoose');
var config = require('config-lite');
var logger = require('../common/logger')

console.log(config.mongodb);

mongoose.connect(config.mongodb, {
	server: {
		poolSize: 20
	}
}, function(err) {
	if (err) {
		logger.error('connect to %s error: ', config.mongodb, err.message);
		process.exit(1);
	}
	logger.info('MongoDB connect success!');
});
// models
require('./article');

exports.Article = mongoose.model('articles');