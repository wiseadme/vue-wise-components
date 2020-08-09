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
          :overlay="true"
          transition="scaleIn"
          v-model="showModal"
          v-if="showModal"
        >
          <div
            slot="header"
            class="modal-header cyan--darken-2"
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
          :overlay="false"
          transition="scaleIn"
          v-model="showModal"
          v-if="showModal"
        >
          <div
            slot="header"
            class="modal-header cyan--darken-2"
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
      </div>`
  }))
