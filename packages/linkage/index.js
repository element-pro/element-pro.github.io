import Linkage from './src/index.vue'

Linkage.install = function (Vue) {
  Vue.component(Linkage.name, Linkage)
}

export default Linkage