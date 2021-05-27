export function debounce(fn, wait = 50) {
  let context, args, timer

  function later() {
    fn.apply(context, args)
    clearTimeout(timer)
  }

  return function () {
    context = this, args = arguments
    clearTimeout(timer)
    timer = setTimeout(later, wait)
  }
}