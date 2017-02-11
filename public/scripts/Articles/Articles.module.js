import angular from 'angular';
import ArticlesCtrl from './Articles.controller.js';
angular
	.module('ArticlesModule', [])
	.controller('ArticlesCtrl', ArticlesCtrl);
	// .controller('ArticlesCtrl', function () {console.log("ArticlesModule")});


// export default angular;