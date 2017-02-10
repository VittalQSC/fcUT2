// alert('hello world3')
console.log('eaaa');

function MainCtrl ($scope) {
	$scope.world = "world";
	this.okay = "okay (._. )"
}

angular.module('MainModule', [])
	.controller('MainCtrl', ['$scope', MainCtrl]);