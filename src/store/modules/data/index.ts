import { state } from './state'
import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'
import { DataState } from '@/interfaces'
import { RootState } from '@/interfaces'
import { Module } from 'vuex'

const namespaced: boolean = true

export const data: Module<DataState, RootState> = {
	namespaced,
	state,
	getters,
	mutations,
	actions
}
