export default function FormDirectiveController($rootScope, $scope, $http) {
	console.log("FormController123 ");
	// console.log("FormController ");
	$scope.newArticle = {
		title: 'ti',
		text: '',
		author: '',
		createDate: ''
	};


	$scope.reset = function () {
		$scope.newArticle = {
			title: '',
			text: '',
			author: '',
			createDate: ''
		};			
	}

	$scope.create = function (article, isValid) {
		// if (!isValid) {
		// 	alert('form isnt valid');
		// 	return;
		// }
		console.log(article);
		
		$http.post('/articles/', article)
			.then(function (s) {console.log(s);}, function (e) {console.log(e);});

		// $http.get('/articles/')
		// 	.then(function (result) {
		// 		$scope.articles = result.data;
		// 	}, function (err) {console.log(err);});	

		$rootScope.$broadcast('updateArticles');	

		$scope.reset();						
	}
}


