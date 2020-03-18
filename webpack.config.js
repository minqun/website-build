const path = require('path');

const webpackMerge = require('webpack-merge');
const BaseConfig = require('./webpack.base');

let config = webpackMerge({},

    BaseConfig, {
        devtool: 'inline-source-map',
        devServer: {
            host: '192.168.5.120',
            port: 8033,
            contentBase: path.join(__dirname, 'dist')
        },
        module: {
            rules: [{
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1,
                        name: '[name].[hash].[ext]',
                        outputPath: 'src/sources/images/'
                    }
                }]
            }]
        }
    }
);
module.exports = config;