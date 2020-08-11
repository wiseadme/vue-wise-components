// import VueModal from '@/components/VueModal'
import { storiesOf } from '@storybook/vue'

storiesOf('VueModal', module)
  .add('overlayable', () => ({
    data() {
      return {
        showModal: true
      }
    },
    template: `
      <div class="wrap">
        <vue-button text="click" class="green--accent-3"  @click="showModal = true"/>
        <vue-modal
          v-model="showModal"
          :overlay="true"
          overlay-opacity=".4"
          overlay-color="grey--darken-4"
          transition="scaleIn"
          width="600"
        >
          <vue-card>
            <vue-card-title class="blue--darken-3">
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
  }))
  .add('without overlay', () => ({
    data() {
      return {
        showModal: true
      }
    },
    template: `
      <div class="wrap">
        <vue-button text="click" class="teal--accent-3"  @click="showModal = true"/>
        <vue-modal
          v-model="showModal"
          :overlay="false"
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
  }))
