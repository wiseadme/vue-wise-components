import { Vue, Component, Prop } from 'vue-property-decorator'
import WithRender from './RoomsTable.html'
import './RoomsTable.scss'

@WithRender
@Component
export default class RoomsTable extends Vue {
  @Prop() text!: string
  @Prop({ default: () => false }) actionBtn!: boolean

  showLog() {
    // console.log('clicked')
  }
}
