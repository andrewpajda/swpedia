const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [          
          'style-loader',
          'css-loader',  
          'sass-loader',          
        ],
      },
      {
        test: /\.svg$/,  
        oneOf: [
          {
            resourceQuery: /inline/, 
            use: 'svg-inline-loader'
          },
          {
            resourceQuery: /external/,
            use: 'file-loader'
          }
        ]      
        // loader: 'svg-inline-loader'
      },  
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}