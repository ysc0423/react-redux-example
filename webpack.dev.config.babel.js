import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import combineLoaders from 'webpack-combine-loaders';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';
import CompressionPlugin from 'compression-webpack-plugin';

module.exports = {
    devtool: 'eval',
    entry: {
      app: './scripts/index.js',
      vendor: [
        'react',
        'react-dom'
      ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: './dist/',
        filename: 'bundle.js',
        chunkFilename: "[name].chunk.js"
    },
    module: {
        loaders: [{
            test: /\.js/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                'style-loader',
                combineLoaders([{
                    loader: 'css-loader',
                    query: {
                        modules: true,
                        localIdentName: '[name]__[local]__[hash:base64:5]'
                    }
                }, {
                    loader: 'postcss-loader'
                }, {
                    loader: 'sass-loader'
                }])
            )
        }, {
            test: /\.(png|jpg|svg)$/,
            loaders: ['url', 'image-webpack']
        }]
    },
    postcss: [autoprefixer({
        browsers: ['last 2 versions']
    })],
    plugins: [
        new ExtractTextPlugin("site.css")，
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
    ],
    externals: {
        //'react': 'React'
    },
};
