import angular from 'angular';
import articlesList from './Articles.component.js';
import article from './Article/Article.module.js';
angular
	.module('ArticlesModule', ['articleModule'])
	.controller('ArticlesCtrl', () => {})
	.component('articlesList', articlesList)
