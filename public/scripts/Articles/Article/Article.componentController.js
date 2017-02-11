function ArticleComponentController($rootScope, $scope, $http) {
	$scope.remove = function (article) {
		$http.get('/articles/remove/' + article._id)
			.then(function () {console.log('suc');}, function () {console.log('err');})
		$rootScope.$broadcast('updateArticles');
	};
}

export default ArticleComponentController;