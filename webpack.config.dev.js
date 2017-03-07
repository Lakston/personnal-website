var path = require('path');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    path.join(__dirname, 'src/main.js'),
    path.join(__dirname, 'src/main.sass')
  ],
  output: {
    path: "./build/"
  },

  module: {
    // Run the linter before babel.
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint',
        include: __dirname + "/src/",
        exclude: /node_modules/,
      }
    ],
    loaders: [
      // Process JS with Babel.
      {
        test: /\.(js|jsx)$/,
        include: __dirname + "/src/",
        loader: 'babel',
        exclude: /node_modules/
      },
      // Process sass and add autoprefixer via postcss
      {
        test: /\.sass$/,
        loader: 'style!css!postcss!sass'
      },
      // "file" loader makes sure those assets get served by WebpackDevServer.
      // When you `import` an asset, you get its (virtual) filename.
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      // "html" loader is used to process template page (index.html) to resolve
      // resources linked with <link href="./relative/path"> HTML tags.
      {
        test: /\.html$/,
        loader: 'html',
        query: {
          attrs: ['link:href'],
        }
      },
      {
        test: /\.pdf$/,
        loader: 'file?name=[path][name].[ext]'
      }
    ]
  },
  // Autoprefixer settings
  postcss: function() {
    return [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
        ]
      }),
    ];
  },
  plugins: [
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: 'index.html',
    }),
    // This is necessary to emit hot updates (currently CSS only):
    new webpack.HotModuleReplacementPlugin()
  ]
};
