var path = require("path");
module.exports = {
	entry: {
		app: ['./node_modules/angular/angular.js', 
			  './node_modules/angular-mocks/angular-mocks.js', 
			  './node_modules/angular-route/angular-route.js', 
			  './public/scripts/Articles/Articles.module.js',
			  './public/scripts/app.js',
			 ]
	},
	output: {
		filename: '[name].js',
	    path: path.resolve(__dirname, 'public/dest')
	}, 
	module: {
	 loaders: [
		  {
	        test: /\.js$/,
	        exclude: /(node_modules|bower_components)/,
	        loader: 'babel-loader',
	        query: {
	          presets: ['es2015']
	        }
	      },
	      {test: /\.html$/, loader: 'raw'}
	    ]
	},
	plugins: [],
	devtool: 'eval-source-map',
	devServer: { hot: true }
}