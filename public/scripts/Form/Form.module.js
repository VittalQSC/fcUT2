import angular from 'angular';
import FormTemplate from './Form.template.html';
import myValidator from './Validator.js';
import FormDirectiveController from './Form.directiveController.js' ;
import ArticlesManager from './../ArticlesManagerService/ArticlesManagerService.js';

angular.module('FormModule', ['ArticlesManager'])
	.directive('articleForm', () => {
		return {
				  template: FormTemplate,
				  replace: true,
				  controller: [
				  	'$rootScope', '$scope', '$http', 'ArticlesManagerService', 
				  	 FormDirectiveController
				  	]
			   }
	})
	.directive('myValidator', myValidator);