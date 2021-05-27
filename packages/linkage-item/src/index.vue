<script type="text/babel">
const DEFAULT_OPTIONS = {
  label: 'label',
  value: 'value',
}
export default {
  name: 'ElproLinkageItem',
  inject: ['elproLinkage'],
  props: {
    fetchMethod: Function,
    options: Object,
  },
  data() {
    return {
      value: '',
      sortIndex: 0,
      selectData: [],
    }
  },
  render(h) {
    const options = this.options || this.elproLinkage.options

    const ElOptions = this.selectData.map((item, index) => (
      <el-option label={item[options.label || DEFAULT_OPTIONS.label]} value={item[options.value || DEFAULT_OPTIONS.value]}></el-option>
    ))

    return (
      <div class="elpro-linkage-item">
        <el-select v-model={this.value} clearable={true} filterable={true} onChange={this.handleChange}>{ElOptions}</el-select>
      </div>
    )
  },
  created() {
    this.sortIndex = this.elproLinkage.itemCount
    this.updateValue()
    this.elproLinkage.updateItemCount()
  },
  mounted() {
    if (this.sortIndex === 0 || this.value) this.fetchData(this.getPreviousValue())
  },
  methods: {
    fetchData(val) {
      const fetchMethod = this.fetchMethod || this.elproLinkage.fetchMethod
      const promise = fetchMethod && fetchMethod(val, this.elproLinkage.model)
      if (promise.then) promise.then((data) => this.selectData = data)
      else setTimeout(() => this.selectData = promise)
      return this
    },
    clear() {
      this.value = ''
      this.selectData = []
      return this
    },
    emitChange(val) {
      this.elproLinkage.onChange(this.sortIndex, val)
      return this
    },
    updateValue() {
      return this.value = this.elproLinkage.model[this.sortIndex] || ''
    },
    handleChange(val) {
      this.emitChange(val)
    },
    update(val) {
      if (val === this.value) return;
      this.updateValue() && this.sortIndex !== 0 && this.fetchData(this.getPreviousValue())
    },
    getPreviousValue() {
      return this.elproLinkage.model[this.sortIndex - 1] || ''
    },
  }
}
</script>