const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point for your application
  output: {
    filename: 'bundle.js', // Output filename
    path: path.resolve(__dirname, 'dist'), // Output directory
    publicPath: '/', // Public path for resources
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Rule for JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, // Rule for image files
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]', // Output images to the 'images' folder
        },
      },
      {
        test: /\.css$/i, // Rule for CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve files from 'dist'
    },
    compress: true,
    port: 8080, // Port for the dev server
  },
  resolve: {
    extensions: ['.js', '.json'], // File extensions to resolve
  },
};

