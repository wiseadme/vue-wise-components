import { configure } from '@storybook/vue'
import Vue from 'vue'
import loadBaseComponents from '@/services/baseComponents'
import '../src/assets/scss/main.scss'

Vue.use(loadBaseComponents)

function loadStories() {
  const req = require.context('../src', true, /\.stories.[jt]s$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
