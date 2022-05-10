const path = require("path");
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
  entry: './src/main.js',
  devServer:{
    contentBase:"./dist",
    inline:true //页面实时刷新
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',//不能加‘/’.加上就不是相对路径了
      // publicPath:'dist/'
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        // css-loader只负责将css文件进行加载(加载)
        // style-loader负责将样式添加到DOM中(解释)
        // 使用多个loader时, 是从右向左
        use: [ 'style-loader','css-loader' ]
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片，小于limit时会将图片编译成base64字符串形式
              //当加载的图片，大于limit时需要使用file-loader模块进行加载
              // limit: 13000,
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve: {
    // 可以省略扩展名， 比如引入vue文件'./vue/App.vue' 可以写成'./vue/App'
    extensions: ['.js', '.css', '.vue'],
    // alias: 别名
    alias: { 
    'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins:[
    new webpack.BannerPlugin('最终版权归JZP所有'),
    new HtmlWebpackPlugin({
      template:'index.html'
    })
  ]
}