import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'
import APlayer from '@moefe/vue-aplayer'
import AV from 'leancloud-storage'

// Let's go!
import App from './App.vue'
import router from './router'
import store from './store'
import config from './config'
import images from './assets/images'
import { isMobile } from './utils'

// Layout and Font
import 'aos/dist/aos.css'
import 'gitalk/dist/gitalk.css'
import 'katex/dist/katex.css'
import '@/assets/font/fontello.scss'
import '@/styles/index.scss'

// Global variable
Vue.config.productionTip = false
Vue.prototype.$config = config
Vue.prototype.$isMobile = Vue.observable({ value: isMobile() })

// Init Progress Bar
const options = {
  color: '#d68fe9',
  thickness: '4px',
  transition: {
    speed: '0.2s',
    opacity: '0.5s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}
Vue.use(VueProgressBar, options)

// Init Player
Vue.use(APlayer, { productionTip: false })

// Init Site Title
const { title, subtitle } = config
document.title = `${title} | ${subtitle}`

// Init Leancloud
window.AV = AV
AV.init(config.leancloud)

// Init Cover
new Image().src = config.defaultCover

new Vue({
  router,
  store,
  render: (h) => h(App),
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
const imgStyle = { height: 1400 / 4, width: 792 / 4 }
const url = 'https://i0.hdslb.com/bfs/album/3fe66f13d7684fc1b451f05a1c349ac4e972bab6.jpg@1e_1c.webp'
const consoleImageCss = [
  'padding: ' + (imgStyle.height / 2 - 8) + 'px ' + imgStyle.width / 2 + 'px;',
  'line-height: ' + imgStyle.height + 'px;',
  'background: url(' + url + ') no-repeat center;',
  'background-size: 100% 100%;'
]
console.log('%c', consoleImageCss.join(''))
