var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './client/src'),
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader',{
          loader: 'css-loader',
          options: {
            modules: true,
          }
        }  ]
      }
    ],
    
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  }, 
};


