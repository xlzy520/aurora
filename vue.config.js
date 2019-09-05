module.exports = {
  productionSourceMap: false,
  devServer: {
    // proxy: {
    //   '/api': {
    //     target: 'http://192.168.23.179:8016/',
    //     changeOrigin: true
    //   }
    // },
    port: 9000
  },
  chainWebpack(config) {
    const jsdelivrCDN = {
      css: [
        '//fonts.googleapis.com/css?family=Noto+Serif+SC',
        '//cdn.jsdelivr.net/npm/lightgallery@1.6.12/dist/css/lightgallery.min.css'
      ],
      js: [
        '//cdn.bootcss.com/animejs/2.2.0/anime.js',
        '//cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js',
        '//cdn.jsdelivr.net/npm/jquery-backstretch@2.1.17/jquery.backstretch.min.js',
        '//cdn.jsdelivr.net/npm/lightgallery@1.6.12/dist/js/lightgallery-all.min.js'
      ]
    }
    const bootCDN = {
      css: [
        '//fonts.googleapis.com/css?family=Noto+Serif+SC',
        '//cdn.bootcss.com/lightgallery/1.6.12/css/lightgallery.min.css'
      ],
      js: [
        '//cdn.bootcss.com/animejs/2.2.0/anime.js',
        '//cdn.bootcss.com/jquery/3.4.1/jquery.min.js',
        '//cdn.jsdelivr.net/npm/jquery-backstretch@2.1.17/jquery.backstretch.min.js',
        '//cdn.bootcss.com/lightgallery/1.6.12/js/lightgallery-all.min.js',
      ]
    }
    config.plugin('html').tap(args => {
      args[0].cdn = bootCDN
      return args
    })
  }
}
