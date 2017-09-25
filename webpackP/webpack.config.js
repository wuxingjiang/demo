/**
 * Created by star on 2016/8/29.
 */
module.exports = {
    // entry: __dirname + '/app/main.js',
    entry: {
        one: __dirname + '/app/main.js',
        two: __dirname + '/app/main2.js',
    },
    output: {
        path: __dirname + '/public',
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js',
    },

    devServer: {
        contentBase: './public',
        colors: true,
        port: '9999',
        inline: true,
        historyApiFallback: true,
    },
    watch: true,
};

