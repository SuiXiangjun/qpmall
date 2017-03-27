
module.exports = {
  // 入口
  entry: './app/index.js',

  // 出口
  output: {
    path: './js',
    filename: 'qpindex.js'
  },

  // 配置模块
  module: {
    loaders: [
      {
        test: /\.js$/, 
        loader: 'jsx-loader'
      }
    ]
  }
}
