<script type="text/babel">
export default {
  name: 'ElproLinkage',
  props: {
    value: {},
    fetchMethod: Function,
    options: {
      type: Object,
      default: () => ({})
    }
  },
  provide() {
    return {
      elproLinkage: this
    }
  },
  data() {
    return {
      model: this.value || [],
      itemCount: 0,
    }
  },
  render(h) {
    return (
      <div class="elpro-linkage">{this.$slots.default}</div>
    )
  },
  watch: {
    value(val = []) {
      this.model = val
      this.$children.forEach((item, index) => item.update(val[index] || ''))
    },
  },
  methods: {
    onChange(index, val) {
      this.model[index] = val
      const next = this.$children[index + 1]
      if (next) {
        val && next.fetchData(val)
        next.clear().emitChange('')
      } else {
        this.$emit('input', this.model.filter((value) => value !== ''))
      }
    },
    updateItemCount() {
      this.itemCount += 1
    },
  },
}
</script>