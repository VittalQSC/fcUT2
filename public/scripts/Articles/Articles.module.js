import angular from 'angular';
import articlesList from './Articles.component.js';
import article from './Article/Article.module.js';
import ArticlesManager from './../ArticlesManagerService/ArticlesManagerService.js';

angular
	.module('ArticlesModule', ['articleModule', 'ArticlesManager'])
	.controller('ArticlesCtrl', () => {})
	.component('articlesList', articlesList)
