const express = require('express');
const router = express.Router();

let ArticleModel = require('../model/index').Article;

//get all
router.get('/', (req, res) => {
	ArticleModel.find({}, function(err, docs) {
		if (err) return console.error(err);
		console.log(docs)
		res.json(docs);
	});
});
//get by id
router.get('/:id', (req, res) => {
	res.send('article by id');
});

//get by page & count

//send a article
router.post('/', (req, res) => {});

module.exports = router;