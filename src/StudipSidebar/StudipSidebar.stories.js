import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import StudipSidebarLinksElement from './StudipSidebarLinksElement.vue';
import StudipSidebarLinksWidget from './StudipSidebarLinksWidget.vue';
import StudipSidebar from './StudipSidebar.vue';

Vue.use(function() {
    Vue.prototype.$studipAssetsPath = '';
});

storiesOf('StudipSidebar', module).add('normal', () => ({
    components: {
        StudipSidebar,
        StudipSidebarLinksWidget,
        StudipSidebarLinksElement
    },
    template: `
<div id="layout_wrapper">
<div id="layout_page">
<div id="layout_container">

<div id="layout-sidebar">

<studip-sidebar>
  <studip-sidebar-links-widget :title="title">
    <studip-sidebar-links-element url="#" label="Create a list" />
    <studip-sidebar-links-element url="#" label="Modify a list" active />
    <studip-sidebar-links-element url="#" label="Delete a list" />
  </studip-sidebar-links-widget>
</studip-sidebar>

</div>

<div id="layout_content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

</div>
</div>
</div>
    `,
    data: () => ({
        title: 'Ein Sidebar-Widget'
    })
}));
