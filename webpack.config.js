const webpack = require('webpack');
const fs = require('fs');

let nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    entry: './src/index.js',
    output: {
        path: './lib',
        filename: 'index.js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    target: 'node',
    externals: nodeModules,
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel',
                query: {
                    presets: ['es2015','stage-0']
                },
                exclude: /node_modules/
            }
        ]
    },
};
