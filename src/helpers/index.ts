export function getSlot(
  vm: Vue,
  name = 'default',
  data?: object | (() => object),
  optional = false
) {

  if (vm.$scopedSlots[name]) {
    return vm.$scopedSlots[name]!(data instanceof Function ? data() : data)
  } else if (vm.$slots[name] && (!data || optional)) {
    return vm.$slots[name]
  }
  return undefined
}
