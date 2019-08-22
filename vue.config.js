
// let target = 'http://127.0.0.1:8084'
let target = 'http://manage.360cec.com' // 测试环境
console.log('process.env.NODE_ENV')
console.log(process.env.NODE_ENV)
console.log(process.env.VUE_APP_CURRENTMODE)
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: "assets",
  productionSourceMap: false, //* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
  filenameHashing: false, //生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
  lintOnSave: true,
  devServer: {
    port: 7000,
    https: false,
    open: true,
    proxy: (() => {
      if (process.env.VUE_APP_CURRENTMODE === 'mock') {
        return process.env.VUE_APP_BASEURL
      } else {
        return { 
          '/brilliant': {
            target: target,
            changeOrigin: true
          }
        }
      }
    })()
  }
}
