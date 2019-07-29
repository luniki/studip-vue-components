import { storiesOf } from '@storybook/vue';
import StudipButton from './StudipButton';

storiesOf('StudipButton', module).add('normal', () => ({
    components: { StudipButton },
    template: `<studip-button name="submit">Submit</studip-button>`,
    data: () => ({})
}));
