const path = require("path");
module.exports={
  entry: './src/main.js',
  output: {
      path: 'path.resovle(__dirname, "dist")',
      filename: '/bundle.js'
  }
}