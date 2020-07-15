// const target = 'https://www.epei360.cn' // 开发环境
const target = 'http://tqmall.360cec.com' // 测试环境
// const target = 'http://www.yunpei.com' // 正式环境

module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '//js.yunpei.com/pc-activity/dist/',
  outputDir: 'dist',
  assetsDir: 'assets',
  productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度但无法查错
  filenameHashing: true, // 生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
  lintOnSave: true,
  devServer: {
    port: 7000,
    https: false,
    open: true,
    proxy: (() => {
      return {
        '/': {
          target: target,
          changeOrigin: true,
          bypass: (req) => {
            if(req.headers.accept.indexOf('html') !== -1 ) {
              return '/index'
            }
          },
        }
      }
    })()
  },
  css: {
    // requireModuleExtension: true,// 启用 CSS modules for all css / pre-processor files.vue-cli3项目vue.config.js中配置的css.modules过时了，改为css.requireModuleExtension
    requireModuleExtension: true,// 启用 CSS modules for all css / pre-processor files.
    extract: true,// 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false, // 开启 CSS source maps?
    loaderOptions: { // css预设器配置项
      sass: {
        prependData: '@import "@/assets/css/_variables.scss";'
      }
    }
  },
}
