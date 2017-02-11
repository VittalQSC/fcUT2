export default function Validator (){ 
	   return {
	      require: 'ngModel',
	      link: function(scope, elem, attr, ngModel) {
	           ngModel.$parsers.unshift(function(value) {
	             var valid = value.length >= 20;
	             ngModel.$setValidity('customValidator', valid);
	             return valid ? value : undefined;
	           });
	      }
	   };
	}