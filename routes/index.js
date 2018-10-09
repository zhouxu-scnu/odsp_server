var express = require('express');
var router = express.Router();


router.get('/dataset', function(req, res, next) {
	console.log(req.headers.authorization);
	res.send({
		help: '获取数据集信息',
		data:[
			{id: '01', name: '数据集01'},
			{id: '02', name: '数据集02'},
			{id: '03', name: '数据集03'}
		]
	});
});

module.exports = router;
