const prod = process.env.NODE_ENV === 'production';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './index.ts',
  output: {
    path: __dirname + '/dist/',
    filename: 'index.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // output file name
      template: 'index.html', // template file name
    }),
    new MiniCssExtractPlugin({ filename: 'app.css' }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist'],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  devtool: prod ? undefined : 'source-map',
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  devServer: {
    historyApiFallback: true,
  },
};
