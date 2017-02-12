function ArticleComponentController($rootScope, $scope, $http, ArticlesManagerService) {
	$scope.remove = function (article) {
		ArticlesManagerService.removeArticle(article);
	};
}

export default ArticleComponentController;