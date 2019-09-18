import Vue from 'vue'
import isMobile from 'ismobilejs'
import AV from 'leancloud-storage'
import FontFaceObserver from 'fontfaceobserver'
import VueProgressBar from 'vue-progressbar'
import APlayer from '@moefe/vue-aplayer'

// Let's go!
import App from './App.vue'
import router from './router'
import store from './store'
import config from './config'

// 全局样式与字体图标
import 'aos/dist/aos.css'
import 'gitalk/dist/gitalk.css'
import './assets/font/fontello.less'
import './assets/style/animation.less'
import './assets/style/layout.less'

// 引入动效库
import firework from './assets/lib/fireworks'
import fairyDustCursor from './assets/lib/fairyDustCursor'

// 配置全局变量
Vue.config.productionTip = false
Vue.prototype.$config = config
Vue.prototype.$isMobile = isMobile.phone
Vue.prototype.$gallery = null

// Init Leancloud
window.AV = AV
AV.init(config.leancloud)

// 顶部进度条
const options = {
  color: '#986DB2',
  thickness: '4px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}
Vue.use(VueProgressBar, options)

// 音乐播放器
Vue.use(APlayer, {
  productionTip: false // disable console output
})

// 烟花特效与鼠标特效
if (!isMobile.phone) {
  config.effect.firework && firework()
  config.effect.fairyDustCursor && fairyDustCursor()
}

// 载入字体
;(function() {
  const font = new FontFaceObserver('Noto Serif SC', { weight: '400' })
  font.load().then(() => {
    document.documentElement.classList.add('fonts-loaded')
  })
})()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 自定义控制台
const labelStyle = 'color:#ffffff;line-height: 22px;'
console.info(`%c ${config.title} %c`, `${labelStyle}background: #d68fe9;`, '', window.location.origin)
console.info('%c Theme %c', `${labelStyle}background: #d68fe9;`, '', 'https://github.com/xlzy520/xlzy520')
console.info('~❀~ 发现控制台报错请务必联系博主 ~❀~')
console.info(
  '%c\n' +
    '                              ..\n' +
    "                            .' @`._\n" +
    "             ~       ...._.'  ,__.-;\n" +
    "          _..------/`           .-'    ~\n" +
    "         :     __./'       ,  .'-'--.._\n" +
    "      ~   `---(.-'''---.    \\`._       `.   ~\n" +
    "        _.--'(  .______.'.-' `-.`        `.\n" +
    '       :      `-..____`-.                  ;\n' +
    '       `.             ````  稻花香里说丰年，  ;   ~\n' +
    "         `-.__           听取人生经验。  __.-'\n" +
    "              ````-----.......-----'''    ~\n" +
    '           ~                   ~',
  'color:#63cb4e;'
)
const img = { height: 1400 / 4, width: 792 / 4 }
const url = 'https://i.loli.net/2019/09/06/RdZ3tj7s4g6boKh.jpg'
const consoleImageCss = [
  'padding: ' + (img.height / 2 - 8) + 'px ' + img.width / 2 + 'px;',
  'line-height: ' + img.height + 'px;',
  'background: url(' + url + ') no-repeat center;',
  'background-size: 100% 100%;'
]
console.log('%c', consoleImageCss.join(''))
