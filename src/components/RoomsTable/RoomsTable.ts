import { Vue, Component, Prop } from 'vue-property-decorator'
import WithRender from './RoomsTable.html'

@WithRender
@Component
export default class VButton extends Vue {
  @Prop() text!: string
  @Prop({ default: () => false }) actionBtn!: boolean
}
