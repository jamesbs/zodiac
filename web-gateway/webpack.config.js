const { join } = require('path')
const WebpackShellPlugin = require('webpack-shell-plugin')

module.exports = {
  mode: 'development',

  target: 'node',

  entry: './index',

  resolve: {
    extensions: [
      '.mjs',
      '.js',
      '.ts',
      '.graphql'
    ],
  },

  devtool: 'source-map',

  context: join(__dirname, 'src'),

  plugins: [
    new WebpackShellPlugin({onBuildEnd: ['nodemon dist/main.js --watch build'] }),
  ],

  module: {
    rules: [
      {
        test: /.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: join(__dirname, './tsconfig.json'),
        },
      },
      {
        test: /\.graphql|\.gql$/,
        loader: 'graphql-tag/loader',
        exclude: /node_modules/,
      }
    ]
  }
}
