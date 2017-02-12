function ArticlesComponentController ($scope, $http, ArticlesManagerService) {
	console.log('ArticlesComponentCtrl');

	ArticlesManagerService.requestArticles().then(result => {
		$scope.articles = result.data;
		$scope.articlesNum = result.data.length; 		
	}, function (err) {console.log(err);});


	$scope.$watch(() => {
		return ArticlesManagerService.getArticles();
	}, (newArticles, oldArticles) => {
		$scope.articles = newArticles;
		$scope.articlesNum = newArticles.length; 
	});
}	

export default ArticlesComponentController;