import Vue from 'vue'
import hljs from 'highlight.js'
// Element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// Element Pro
import ElementPro from '../lib/element-pro.common'
import '../lib/theme/index.css'
// Register global components
import ElproDemo from './components/ElproDemo'
import './global.css'
import App from './App'
import router from './router'

Vue.use(ElementUI)
Vue.use(ElementPro)
Vue.component(ElproDemo.name, ElproDemo)

router.afterEach(route => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})