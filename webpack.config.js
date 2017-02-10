var path = require("path");
module.exports = {
	entry: {
		app: ['./node_modules/angular/angular.js', 
			  './node_modules/angular-mocks/angular-mocks.js', 
			  './node_modules/angular-route/angular-route.js', 
			  './public/scripts/app.js',
			 ]
	},
	output: {
		filename: '[name].js',
	    path: path.resolve(__dirname, 'public/dest')
	}, 
	module: {

	},
	plugins: [],
	devtool: 'eval-source-map',
	devServer: { hot: true }
}