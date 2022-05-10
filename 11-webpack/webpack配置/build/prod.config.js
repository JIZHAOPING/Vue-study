// 生产环境下的配置文件
const webpackMerge = require("webpack-merge")
const baseConfig = require("./base.config")
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
module.exports = webpackMerge(baseConfig, {
    plugins: [
        new UglifyjsWebpackPlugin()
    ]
})