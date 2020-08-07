import { VNode } from 'vue'

export type ClassType<T extends string> = T extends string ? string : boolean
export type VNodeCreator<T extends (...arg:  VNode[]) => VNode> = T
export type someType<T> = T extends number ? number : T extends string ? string : never

export type extractArrayType<T> = T extends (infer U)[] ? U : never
// let name: extractArrayType<['hello']> = 'hello'
