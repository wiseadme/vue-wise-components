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
        overlay-opacity=".4"
        overlay-color="teal--darken-1"
        transition="scaleIn"
        width="600"
      >
        <vue-card>
          <vue-card-title class="teal--darken-3">
            warning
          </vue-card-title>
          <vue-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad amet, aspernatur, consectetur deserunt eius ex inventore iure, iusto minima officia quisquam reprehenderit repudiandae temporibus tenetur. Ab alias aliquam aspernatur beatae commodi delectus fuga maiores, nesciunt, provident quaerat, rem sit
          </vue-card-content>
          <vue-card-actions>
            <vue-button
              text="ok"
              type="primary"
              @click="showModal = !showModal"
            />
          </vue-card-actions>
        </vue-card>
      </vue-modal>
    </div>`
})

export default class App extends Vue {
  showModal: boolean = true
  text: string = ''
}
