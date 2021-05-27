/**
 * Element Pro (c) Ecan Chen
 */
import Dialog from '../packages/dialog/index'
import Drawer from '../packages/drawer/index'
import Puzzler from '../packages/puzzler/index'
import Uploader from '../packages/uploader/index'
import Linkage from '../packages/linkage/index'
import LinkageItem from '../packages/linkage-item/index'

const ELPRO_VERSION = require('../package.json').version

const components = [
  Puzzler,
  Uploader,
  Linkage,
  LinkageItem,
]

const install = function (Vue) {
  components.forEach(component => Vue.component(component.name, component))
  Vue.prototype.$dialog = Dialog
  Vue.prototype.$drawer = Drawer
}

export default {
  version: ELPRO_VERSION,
  install,
  Dialog,
  Drawer,
  Puzzler,
  Uploader,
  Linkage,
  LinkageItem,
}