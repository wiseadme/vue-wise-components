import { Component, Vue } from 'vue-property-decorator'
import './assets/scss/main.scss'

@Component({
  template: `
    <div id="app">
      <vue-button
        text="hello"
        type="success"
        :disabled="false"
        @click="showModal = true"
        v-slot="some"
      />
        <vue-chip
          :disable="false"
          :selected="false"
          text="09:00"
        />
      <vue-modal
        :overlay-show="true"
        :close-button="true"
        transition="scaleIn"
        v-model="showModal"
      >
        <template slot="body">
          <span>body</span>
        </template>
        <div class="btn-wrap" slot="footer">
          <vue-button
            text="ok"
            type="primary"
            @click="showModal = !showModal"
          />
        </div>
      </vue-modal>
    </div>`,
})

export default class App extends Vue {
  showModal: boolean = true

  showLog() {/*something here*/}
}
