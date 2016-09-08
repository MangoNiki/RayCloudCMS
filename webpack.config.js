var path = require('path');

module.exports = {
    // 入口
    entry: {
        app : './src/app'
    },

    // 输出
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].min.js',
        publicPath: '/dist/'
    }
};
