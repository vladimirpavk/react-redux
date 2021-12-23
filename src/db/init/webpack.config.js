const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './init.js',
    mode: 'development',      
    externalsPresets: {
      node:true
    },   
    externals: [nodeExternals()],
    output: {
      path: path.resolve(__dirname),
      filename: './bundle/init.js',
    },
  /*   watch: true,
    watchOptions:{
      aggregateTimeout: 600,
      ignored: '/node_modules'
    },*/
    module:{
      rules: [
        {
          test: /\.js$/,        
          use: [
            {
              loader: 'babel-loader',
              options: {
                ignore: ['/node_modules'],
                presets: [
                  "@babel/preset-env"
                ]
              }
            }
          ]
        }
      ]
    }
  };