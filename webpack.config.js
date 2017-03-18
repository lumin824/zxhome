var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:'./src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {test: /\.png$/, loader: 'url-loader?mimetype=image/png&limit=1000'},
      {test: /\.js$/, use: ['file-loader']},
      {test: /\.css$/, use: ['file-loader']},
      {test: /\.html$/, use: [
        {loader: 'html-loader', options:{
          //minimize:true,
          removeComments:true,
          attrs:['img:src', 'a:href', 'link:href', 'script:src','img:data-original']
        }}
      ]},

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template:'./src/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'index_en.html',
      template:'./src/index_en.html',
    })
  ]
}
