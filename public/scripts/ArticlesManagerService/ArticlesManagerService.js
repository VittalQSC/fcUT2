import angular from 'angular';

angular.module('ArticlesManager', [])
	.controller('ArticlesManagerCtrl', () => {console.log('ArticlesManagerCtrl!!');})
	.factory('ArticlesManagerService', ($http) => {
		console.log('IM IN SERVICE');
		let articlesService = [];
		return { 
				  requestArticles: () => {
					return $http.get('/articles/').then(result => {
						articlesService = result.data;
						return result; 		
					}, function (err) {console.log(err);});					  	
				  },
				  postArticle: (article) => {
			  		articlesService.push(article); 
			  		articlesService = articlesService.slice();
				  	return $http.post('/articles/', article).then((s) => {
				  		console.log("s",s)
				  	}, function (e) {console.log(e);});
				  },
				  removeArticle: (article) => {
				  	return $http.get('/articles/remove/' + article._id).then((result) => {
				  		console.log('suc');
				  		articlesService = result.data;
				  	}, function () {console.log('err');})
		
				  },
				  setArticles: (articles) => {
					articlesService = articles;
				  },
				  getArticles: () => {
				  	return articlesService;
				  }

			   }; 
	})