import LinkageItem from './src/index.vue'

LinkageItem.install = function (Vue) {
  Vue.component(LinkageItem.name, LinkageItem)
}

export default LinkageItem