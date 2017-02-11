function ArticlesComponentController ($scope, $http) {
	console.log('ArticlesComponentCtrl');
	function httpGetArticles() {
		$http.get('/articles/').then(function (result) {
			updateArticles(result.data); 		
		}, function (err) {console.log(err);});			
	}
	function updateArticles (articles) {
		$scope.articles = articles;
		$scope.articlesNum = articles.length; 				
	}

	httpGetArticles();

	$scope.$on('updateArticles', function () {
		httpGetArticles();				
	}) 	
}	

export default ArticlesComponentController;