import { storiesOf } from '@storybook/vue'
import StudipMessageBox from './StudipMessageBox.vue'

storiesOf('StudipMessageBox', module)
    .add('normal', () => ({
        components: { StudipMessageBox },
        template: `
<div>
<studip-message-box v-for="type in ['info', 'success', 'error']" :type="type" :message="message" :details="details" />
</div>
        `,
        data: () => ({
            details: [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi"
            ],
            message: "Hello World!"
        })
    }))
