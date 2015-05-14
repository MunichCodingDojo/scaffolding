'use strict';

module.exports = {
    resolve: {
        extensions: [ '', '.js', '.jsx' ]
    },
    entry: './app/index.jsx',
    output: {
        filename: 'public/bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'jsx-loader' }
        ]
    }
};
