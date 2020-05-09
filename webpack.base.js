// this is base file that is the same for both webpack client and server
// we use webpack-merge to add this to the webpack files.

module.exports = {

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