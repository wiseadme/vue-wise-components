import { Component, Vue } from 'vue-property-decorator'
import RoomsTable from '@/components/RoomsTable/RoomsTable'
import './assets/scss/main.scss'

@Component({
  template: `
    <div id="app">
      <transition name="fadeIn" mode="out-in">
        <router-view/>
      </transition>
    </div>`,

  components: {
    RoomsTable
  }
})

export default class App extends Vue {

}
