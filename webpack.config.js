const webpack = require('webpack');
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
module.exports = (env, argv) => {
   return ({
      context: __dirname,
   entry: './src/index.js',
   output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'main.js',
   },
   devServer: {
      historyApiFallback: true,
      proxy: {
         '/api/': {
             target: 'https://api.github.com/',
             secure: false,
             changeOrigin: true,
             pathRewrite: {"^/api" : ""}
         }
      }
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            use: 'babel-loader',
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(png|j?g|svg|gif)?$/,
            use: 'file-loader'
         }
]
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: path.resolve( __dirname, 'public/index.html' ),
         inject: false,
         filename: 'index.html'
      }),
      new webpack.DefinePlugin({
         'process.env.NODE_ENV': `"${argv.mode}"`
      })
   ]
   })
};