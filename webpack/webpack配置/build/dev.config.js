//开发环境下的配置文件
const webpackMerge = require("webpack-merge")
const baseconfig = require("./base.config")
module.exports = webpackMerge(baseconfig,{
  devServer:{
    contentBase:"./dist",
    inline:true //页面实时刷新
  },
})