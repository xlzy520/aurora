const isProd = process.env.NODE_ENV === 'production'
const externals = ()=>{
  if (isProd) {
    return {
      'gitalk': 'Gitalk',
      'leancloud-storage': 'AV'
    }
  }
  return {}
}
module.exports = {
  productionSourceMap: false,
  publicPath: isProd ? `https://cdn.jsdelivr.net/gh/xlzy520/xlzy520-blog@gh-pages/` : '/',
  devServer: {
    hot: true,
    clientLogLevel: 'warning'
  },
  chainWebpack(config) {
    const cdn = {
      css: [
        'https://fonts.googleapis.com/css?family=Fira+Mono|Noto+Serif+SC&display=swap',
      ],
      js: [
        'https://cdn.jsdelivr.net/gh/chanshiyucx/aurora/public/live2d/live2d.min.js',
        'https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js',
        'https://cdn.jsdelivr.net/npm/jquery-backstretch@2.1.17/jquery.backstretch.min.js'
      ]
    }
    if (isProd) {
      cdn.js = cdn.js.concat([
        'https://cdn.jsdelivr.net/npm/leancloud-storage@4.6.1/dist/av-min.js',
      ])
    }
    config.plugin('html').tap(args => {
      args[0].cdn = cdn
      return args
    })
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "~@/styles/variables.scss";
          @import "~@/styles/mixin.scss";
        `
      }
    }
  },
  configureWebpack: config=>{
    config.externals = externals()
  }
}
