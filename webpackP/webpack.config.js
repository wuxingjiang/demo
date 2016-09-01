/**
 * Created by star on 2016/8/29.
 */
module.exports = {
    entry: __dirname + '/app/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: './public',
        colors: true,
        port: '9999',
        inline: true,
        historyApiFallback: true
    }
}

