const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

// When bundling with Webpack for the backend - you usually don't want to  
// bundle its node_modules dependencies. This library creates 
// an externals function that ignores node_modules when bundling in Webpack.
// https://www.npmjs.com/package/webpack-node-externals
const webPackNodeExternals = require('webpack-node-externals')


// WEBPACK CONFIG TO BUILD A BUNDLE FOR NODE.JS //
const config = {
    //inform webpack we're building a bundle for node.js
    // rather than for the browser
    target: 'node',
    // tell webpack the root file of our server application
    entry: './src/index.js',

    // the output option is going to tell
    // webpack where to put the generated file
    // dirname is root directory, build is the name of the folder that
    // will be generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    // add externals and call webPackNodeExternals()
    externals: [webPackNodeExternals()]

}

module.exports = merge(baseConfig, config)