import { Vue, Component, Prop } from 'vue-property-decorator'
import './VModal.scss'

@Component({
  template: `
    <div class="v-modal">
      <div class="v-modal__body">
        <slot name="body"></slot>
      </div>
      <div class="v-modal__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  `
})

export default class VModal extends Vue {
  @Prop() text!: string
}
