import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

const story = storiesOf('VueButton', module)

story.addDecorator(withKnobs)

story.add('primary', () => ({
  methods: {
    addClick: () => action('clicked')
  },
  props: {
    text: {
      default: text('btn-label', 'stop')
    }
  },
  template: `
    <div class="btn-wrap">
      <vue-button type="primary" :text="text" @click="addClick">some icon</vue-button>
    </div>`
}))
  .add('success', () => ({
    template: `
      <div class="btn-wrap">
        <vue-button type="success" text="send"></vue-button>
      </div>`
  }))
  .add('warning', () => ({
    template: `
      <div class="btn-wrap">
        <vue-button type="warning" text="send"></vue-button>
      </div>`
  }))
