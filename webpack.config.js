const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '标题',
      template: './src/template.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/index.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 这是一个loader，如果loader需要给参数，就写成对象的形式
          {
            loader: MiniCssExtractPlugin.loader,   // loader 是哪个
            options: {   // 所有的配置参数都要放在这个对象里面
              publicPath: '../'   // 这个表示css文件里但凡用到地址的地方在其前面加个目录 '../'，这个是为了能找到图片
            }
          },
          'css-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        // use: ['file-loader']
        use: [
          {
            loader: 'url-loader',   // 把图片转成base64
            options: {
              limit: 50 * 1024, // 小于50k就会转成base64
              outputPath: 'images'
            }
          }
        ]
        //use:'url-loader?limit=50000&outputPath=images'    //loader的另一种写法，与get请求方式相同
      }
    ]
  }
}