const path = require('path')


// WEBPACK CONFIG TO BUILD A BUNDLE FOR NODE.JS //
module.exports = {
  

    // tell webpack the root file FOR OUR CLIENT application

    entry: './src/client/client.js',

    // the output option is going to tell
    // webpack where to put the generated file
    // dirname is root directory, build is the name of the folder that
    // will be generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    // tell webpack to run babel on every file it runs through

    module: {
        rules: [
            {
                // regex for .js files
                test: /\.js$/,
                loader: 'babel-loader',
                //regex for node modules
                exclude: '/node_modules/',
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', {targets: {browsers: ['last 2 versions']}}]
                    ]

                }
            }
        ]
    }
}