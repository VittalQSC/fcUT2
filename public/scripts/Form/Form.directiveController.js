export default function FormDirectiveController($rootScope, $scope, $http, ArticlesManagerService) {
	const emptyArticle = {
		title: 'ti',
		text: '',
		author: '',
		createDate: ''
	};
	// console.log("FormController ");
	$scope.newArticle = Object.assign({}, emptyArticle);


	$scope.reset = () => {
		$scope.newArticle = Object.assign({}, emptyArticle);			
	}

	$scope.create = (article, isValid) => {
		ArticlesManagerService.postArticle(article);		
		$scope.reset();						
	}
}


