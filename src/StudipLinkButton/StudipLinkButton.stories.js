import { storiesOf } from '@storybook/vue';
import StudipLinkButton from './StudipLinkButton';

storiesOf('StudipLinkButton', module).add('normal', () => ({
    components: { StudipLinkButton },
    template: `
      <studip-link-button>{{label}}</studip-link-button>
    `,
    data: () => ({
        label: 'Submit form'
    })
}));
