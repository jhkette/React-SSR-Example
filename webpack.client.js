const path = require('path')
// webpack merge to 'merge' webpack files
const merge = require('webpack-merge')
// baseConfig file for babel settings
const baseConfig = require('./webpack.base.js')

// WEBPACK CONFIG TO BUILD A BUNDLE FOR NODE.JS //
const config = {
  

    // tell webpack the root file FOR OUR CLIENT application

    entry: './src/client/client.js',

    // the output option is going to tell
    // webpack where to put the generated file
    // dirname is root directory, build is the name of the folder that
    // will be generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
}

// merge webpack
module.exports = merge(baseConfig, config)