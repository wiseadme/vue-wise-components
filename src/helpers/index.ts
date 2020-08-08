import { VNode, VNodeData } from 'vue/types'
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

export function createVNode(
  vm: Vue,
  tag: string,
  dataObject: VNodeData,
  children: any = null
): VNode | null {
  if (children) {
    return vm.$createElement(tag, dataObject, children)
  }
  return null
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
