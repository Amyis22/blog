module.exports = {
	entry: {
		'index' : './src/release/index.js',
		'article_detail' : './src/release/article_detail.js'
	},
	output: {
		path: __dirname,
		filename: './dist/[name].js'
	},
	module: {
		loaders: [
			{test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader!'},
			{test: /\.css$/, loader: 'style!css!'},
			{test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
			{test: /\.(html|tpl)$/, loader: 'html-loader'}
		]
	}
}