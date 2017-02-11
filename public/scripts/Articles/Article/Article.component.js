import articleTemplate from './Article.template.html'
import articleComponentController from './Article.componentController.js'

const articleComponent = {
	template: articleTemplate,
	controller: articleComponentController,
    bindings: {
	  article: '<' // or key: '<' it depends on what binding you need
    }	
}

export default articleComponent;