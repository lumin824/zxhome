var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry:'./src/index.js',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new ExtractTextPlugin({
      filename:'[name].[chunkhash].css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template:'./src/index.html',
    }),

    // new HtmlWebpackPlugin({
    //   filename: 'index_en.html',
    //   template:'./src/index_en.html',
    // }),
    //extractCSS,
  ],
  module: {
    loaders: [
      {test: /\.png$/, use: 'url-loader?mimetype=image/png&limit=1000'},
      {test: /\.js$/, use: ['file-loader']},
      {test: /\.(gif|ttf|svg|woff|woff2|eot)$/, loader: 'file-loader'},
      //{test: /\.css$/, use: },
      {test:/\.css$/, use: ExtractTextPlugin.extract({
        use:['css-loader'],
        fallback:'style-loader'
      })},
      {test: /\.html$/, use: [
        {loader: 'html-loader', options:{
          attrs:['img:src', 'a:href', 'link:href', 'script:src','img:data-original']
        }}
      ]},

    ]
  },

}
