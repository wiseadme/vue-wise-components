import { VNode } from 'vue/types'
import Vue from 'vue'

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

export function createSimpleFunctional (
  c: string,
  el = 'div',
  name?: string
) {
  return Vue.extend({
    name: name || c.replace(/__/g, '-'),

    functional: true,

    render (h, { data, children }): VNode {
      data.staticClass = (`${c} ${data.staticClass || ''}`).trim()

      return h(el, data, children)
    },
  })
}


export function addOnceEventListener (
  el: EventTarget,
  eventName: string,
  cb: (event: Event) => void,
  options: boolean | AddEventListenerOptions = false
): void {
  const once = (event: Event) => {
    cb(event)
    el.removeEventListener(eventName, once, options)
  }

  el.addEventListener(eventName, once, options)
}
