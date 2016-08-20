module.exports = {
    entry: './src/index.js',
    output: {
        path: './dist',
        publicPath: "http://127.0.0.1:8080/dist",
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },
    vue: {
        loaders: {
            js: 'babel'
        }
    }
};
