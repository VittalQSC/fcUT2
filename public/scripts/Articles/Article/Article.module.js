import angular from 'angular';
import articleComponent from './Article.component.js';
import ArticlesManager from './../../ArticlesManagerService/ArticlesManagerService.js';

angular.module('articleModule', ['ArticlesManager'])
	.component('article', articleComponent)