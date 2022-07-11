"use strict";

const path = require("path");
const NodemonPlugin = require("nodemon-webpack-plugin");
const TSCheckerPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "src"),
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    },
    plugins: [new NodemonPlugin(), new TSCheckerPlugin()],
    resolve: {
        extensions: [".ts", ".json", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },
    target: "node",
};
