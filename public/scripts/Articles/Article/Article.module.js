import angular from 'angular';
import articleComponent from './Article.component.js';

angular.module('articleModule', [])
	.component('article', articleComponent)