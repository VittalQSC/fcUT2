import angular from 'angular';
import './Articles/Articles.module.js';
import './Form/Form.module.js';
console.log('app file');

function MainCtrl ($scope) {
	$scope.world = "world";
	this.okay = "okay (._. )";
}

angular.module('MainModule', ['ArticlesModule', 'FormModule'])
	.controller('MainCtrl', ['$scope', MainCtrl]);