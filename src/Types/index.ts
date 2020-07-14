import { VNode } from 'vue'

export type ClassType<T extends string> = T extends string ? string : boolean
export type VNodeCreator<T extends (...arg: any[]) => VNode> = T
