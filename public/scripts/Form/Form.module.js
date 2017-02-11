import angular from 'angular';
import FormTemplate from './Form.template.html';
import myValidator from './Validator.js';
import FormDirectiveController from './Form.directiveController.js' ;

angular.module('FormModule', [])
	.directive('articleForm', function () {
		return {
				  template: FormTemplate,
				  replace: true,
				  controller: ['$rootScope', '$scope', '$http', FormDirectiveController]
			   }
	})
	.directive('myValidator', myValidator);