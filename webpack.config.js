const path = require("path");
let mode = "development"
let target = "web"

if (process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browserslist"
}
module.exports = {
    mode: mode,
    target: target,
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [".js"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        cacheCompression: false,
                        envName: mode
                    }
                }
            }
        ]
    },
    devServer: {
        static: './',
        hot: true,
        port:8080,
        // proxy: {
        //     '/api': {
        //         target: 'https://j1sonplaceholder.typicode.com'
        //     }
        // }
    }
}
