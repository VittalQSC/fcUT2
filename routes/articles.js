var express = require('express');
var router = express.Router();
// var Article = require('./../models/ArticleSchema.js');
var Article = require('./../models/Article.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("articles/"); 
  Article.find({}, function (err, articles) {	
 	// console.log(articles)
 	// res.render('articles', {articles})
 	res.json(articles)
  });
  
  // res.json({success: true});	

});

module.exports = router;
