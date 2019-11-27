const path = require("path");

module.exports = {
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // 样式资源处理器
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, "./src/assets/less/variables.less")]
        }
    },
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            less: {
                data: `@import "@/assets/less/variables.less";`
            }
        },
        // 启用 CSS modules for all css / pre-processor files.
        modules: false,
    },
    // webpack-dev-server 相关配置
    devServer: {
        open: true,
        host: 'localhost',
        port: 8085,
        https: false,
        hotOnly: false,
        proxy: 'http://localhost:8088/',
        // proxy: {
        //     '/': {
        //         //代理api
        //         target: 'http://localhost:8090', //服务器api地址
        //         changeOrigin: true, //是否跨域
        //         ws: true, // proxy websockets
        //         pathRewrite: {
        //             //重写路径
        //             "^/": '/cms',
        //         }
        //     },
        // },
    }
}
