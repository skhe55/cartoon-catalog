const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");


module.exports = {
    resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"],
        extensions: [".tsx", ".ts", ".jsx", ".js"]
    },
    entry: ["./src/index.tsx"],
    module: {
        rules: [
            {
                test: /\.ts[x]?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            }
        ]
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "./dist"),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        hot: true,
        compress: true,
        port: 9002,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./public/index.html"),
            filename: "index.html",
        })
    ]
};