import { Vue, Component, Prop } from 'vue-property-decorator'
import { Time } from '@/interfaces'
import './VChip.scss'

@Component({
  template: `
    <div @click="$emit('click', timeObject)" :class="['v-chip', 'v-chip--' + timeStatus]">
      <div class="v-chip__inner">
        <span
          class="v-chip__text"
        >
					{{ timeObject.time }}
				</span>
        <span
          :class="['v-chip__icon', 'v-chip__icon--' + timeStatus]"
        ></span>
      </div>
    </div>
  `
})

export default class VChip extends Vue {
  @Prop() timeObject!: Time

  get timeStatus(): string {
    const { disabled, selected } = this.timeObject
    return disabled ? 'disabled' : selected ? 'selected' : 'default'
  }
}
