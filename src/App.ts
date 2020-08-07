import { Component, Vue } from 'vue-property-decorator'
import './assets/scss/main.scss'

@Component({
  template: `
    <div id="app">
      <vue-button
        text="hello"
        type="success"
        :disabled="false"
        @click="showLog"
        v-slot="some"
      />
      <div class="chip-wrap red-darken-1" :style="{width: '80px', height: '25px', position: 'relative'}">
        <vue-chip
          :disable="false"
          :selected="false"
          text="09:00"
        >
          <i class="icon" slot="icon">icon</i>
        </vue-chip>
      </div>
      <vue-modal class="orange--darken-1">
        <template slot="body">
          <span>body</span>
        </template>
        <div class="btn-wrap" slot="footer">
          <vue-button
            text="ok"
            type="primary"
          >
            <span>icon here</span>
          </vue-button>
        </div>
      </vue-modal>
    </div>`,
})

export default class App extends Vue {
  showLog() {

  }
}
