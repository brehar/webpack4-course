import express from 'express';

const webpack = require('webpack');

const config = require('../../config/webpack.dev');
const compiler = webpack(config);
const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, config.devServer);
const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);

const server = express();

server.use(webpackDevMiddleware);
server.use(webpackHotMiddleware);
server.use(express.static('dist'));

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}...`);
});
