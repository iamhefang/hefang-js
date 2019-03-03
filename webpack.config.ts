import * as path from "path";

// const DtsPlugin = require('dts-webpack-plugin');

module.exports = {
    entry: "./index.ts",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "umd",
        library: "H",
        umdNamedDefine: false,
        globalObject: "typeof self !== 'undefined' ? self : this"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".json"]
    },
    module: {
        rules: [
            {test: /\.ts/, use: "ts-loader"},
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }, // plugins: [
    //     new DtsPlugin({
    //         name: "hefang-js"
    //     })
    // ]

};