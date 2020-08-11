import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

const story = storiesOf('VueCard', module)

story.addDecorator(withKnobs)

story.add('simple-card', () => ({
  methods: {
    action: () => action('clicked')
  },
  props: {
    text: {
      default: text('btn-label', 'primary')
    }
  },
  template: `
    <div :style="{width: '100%', display: 'flex', padding: '20px'}">
      <vue-card width="300">
        <vue-card-title class="blue--darken-2">
          test card
        </vue-card-title>
        <vue-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eveniet perferendis placeat quis, reprehenderit suscipit?
        </vue-card-content>
        <vue-card-actions>
          <vue-button text="close" type="warning"></vue-button>
        </vue-card-actions>
      </vue-card>
    </div>`
}))

