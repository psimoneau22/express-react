const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const plugins = [
    new CleanWebpackPlugin(["dist/wwwroot/**/*"], { watch: true }),
    new HtmlWebpackPlugin({
        template: "src/wwwroot/index.html"
    })
];
let devtool = 'eval-source-map'
if(process.env.NODE_ENV === 'production') {
    console.log('prodmode');
    plugins.push(
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new UglifyJSPlugin({
            sourceMap: true,
        })
    );
    devtool = 'source-map';
}

module.exports = {
    entry: {
        'app': ['./src/wwwroot'],
    },
    output: {
        filename: '[name].[hash].js',
        path: __dirname + '/dist/wwwroot',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ["@babel/env", {
                                "targets": {
                                    "browsers": ["last 1 Chrome version"]
                                }
                            }],
                            "@babel/stage-2",
                            "@babel/react",
                        ],
                        babelrc: false
                    }
                },
                exclude: '/node_modules/',
            }
        ]
    },
    plugins: plugins,
    devtool: devtool
}