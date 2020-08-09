import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

const story = storiesOf('VueButton', module)

story.addDecorator(withKnobs)

story.add('types', () => ({
  methods: {
    action: () => action('clicked')
  },
  props: {
    text: {
      default: text('btn-label', 'primary')
    }
  },
  template: `
    <div :style="{width: '100%', display: 'flex'}">
      <div class="btn-wrap">
        <vue-button type="primary" :text="text" @click="action"></vue-button>
      </div>      
      <div class="btn-wrap">
        <vue-button type="success" text="success" @click="action"></vue-button>
      </div>      
      <div class="btn-wrap">
        <vue-button type="warning" text="warning" @click="action"></vue-button>
      </div>      
      <div class="btn-wrap">
        <vue-button type="danger" text="danger" @click="action"></vue-button>
      </div>      
      <div class="btn-wrap">
        <vue-button class="teal--darken-1" text="colored" @click="action"></vue-button>
      </div>
    </div>`
}))

