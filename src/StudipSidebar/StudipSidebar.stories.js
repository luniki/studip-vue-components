import { storiesOf } from '@storybook/vue';
import StudipSidebar, { ListWidget } from './StudipSidebar';

storiesOf('StudipSidebar', module).add('normal', () => ({
    components: {
        StudipSidebar,
        StudipSidebarListWidget: ListWidget
    },
    template: `
<studip-sidebar>
<studip-sidebar-list-widget>
<studip-sidebar-widget-element></studip-sidebar-widget-element>
</studip-sidebar-list-widget>
</studip-sidebar>
    `,
    data: () => ({
        label: 'Submit form'
    })
}));
