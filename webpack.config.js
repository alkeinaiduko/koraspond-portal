const path = require('path')

module.exports = {
    // ESLint config
    output: {
        filename: 'js/app.js',
        chunkFilename: 'js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ]
    },

    // Create alias ~ for /resources/js folder
    // Make sure the webpack configuration file is pointed correctly in the configuration of the PhpStorm in:
    // Settings > Languages & Frameworks > Javascript > Webpack
    resolve: {
        extensions: ['.js', '.json', '.vue'],
        alias: {
            '~': path.resolve(__dirname, './resources/js')
        }
    },
};
