module.exports = {
	entry: './src/scripts/release/index.js',
	output: {
		path: __dirname,
		filename: './src/scripts/release/bundle.js'
	},
	module: {
		loaders: [
			{test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader!'},
			{test: /\.css$/, loader: 'style!css!'},
			{test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
		]
	}
}