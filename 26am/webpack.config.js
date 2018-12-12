module.exports = {
    entry: './src/my-app.js',
    module: {
      rules: [
       {
          test: /\.css|\.s(c|a)ss$/,
          use: [{
            loader: 'polymer-css-loader',
            options: {
              minify: true, // defaults to false
            },
          }, 'extract-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
  };