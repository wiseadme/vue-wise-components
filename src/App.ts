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
        v-model="showModal"
        :overlay="true"
        transition="scaleIn"
      >
        <div
          slot="header"
          class="modal-header cyan--darken-1"
        >
          warning
        </div>
        <template slot="body">
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad amet, aspernatur, consectetur deserunt eius ex inventore iure, iusto minima officia quisquam reprehenderit repudiandae temporibus tenetur. Ab alias aliquam aspernatur beatae commodi delectus fuga maiores, nesciunt, provident quaerat, rem sit.</span>
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
  text: string = ''
}
