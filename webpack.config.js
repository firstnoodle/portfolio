const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        historyApiFallback: true,
        noInfo: true,
        inline: true,
        overlay: true,
        watchContentBase: false,
    },
    plugins: [new VueLoaderPlugin()],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.scss$/,
                use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.sass$/,
                use: ['vue-style-loader', 'css-loader', 'sass-loader?indentedSyntax'],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        scss: ['vue-style-loader', 'css-loader', 'sass-loader'],
                        sass: ['vue-style-loader', 'css-loader', 'sass-loader?indentedSyntax'],
                    },
                    // other vue-loader options go here
                },
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]',
                },
            },
        ],
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '~': path.resolve(__dirname, 'src/js'),
            variables: path.resolve(__dirname, 'src/scss/variables.scss'),
        },
        extensions: ['*', '.js', '.vue', '.json'],
    },
    optimization: {
        minimize: true, //Update this to true or false
    },
    performance: {
        hints: false,
    },
    devtool: '#eval-source-map',
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
            },
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
    ]);
}
