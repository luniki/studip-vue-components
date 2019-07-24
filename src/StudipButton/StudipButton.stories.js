import { storiesOf } from '@storybook/vue';
import StudipButton from './StudipButton';

storiesOf('StudipButton', module).add('normal', () => ({
    components: { StudipButton },
    template: `<studip-button>Submit</studip-button>`,
    data: () => ({})
}));
