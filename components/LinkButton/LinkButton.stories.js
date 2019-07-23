import { storiesOf } from '@storybook/vue'
import LinkButton from './LinkButton'

storiesOf('LinkButton', module)
  .add('normal', () => ({
    components: { LinkButton },
    template:
    `
      <LinkButton />
    `,
    data: () => ({
    })
}))
