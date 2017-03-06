var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	author: String, //Schema.Types.ObjectId
	title: String,
	content: String,
	pv: Number
});

ArticleSchema.index({
	author: 1
});

mongoose.model('articles', ArticleSchema);