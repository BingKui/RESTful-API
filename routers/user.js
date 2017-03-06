const express = require('express');
const router = express.Router();

//get all
router.get('/', (req, res) => {
	res.json({
		retCode: '200',
		data: {
			info: 'all article!'
		}
	});
});
//get by id
router.get('/:id', (req, res) => {
	res.send('article by id');
});


module.exports = router;