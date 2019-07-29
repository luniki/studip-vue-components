import StudipButton from './StudipButton/StudipButton.vue'
import StudipIcon from './StudipIcon/StudipIcon.vue'
import StudipLinkButton from './StudipLinkButton/StudipLinkButton.vue'

import StudipHeaderNavigation from './StudipHeaderNavigation/StudipHeaderNavigation.vue'
import StudipHeaderNavigationItem from './StudipHeaderNavigation/StudipHeaderNavigationItem.vue'

import StudipSidebarLinksElement from './StudipSidebar/StudipSidebarLinksElement.vue'
import StudipSidebarLinksWidget from './StudipSidebar/StudipSidebarLinksWidget.vue'
import StudipSidebar from './StudipSidebar/StudipSidebar.vue'

import StudipTabs from './StudipTabs/StudipTabs.vue'
import StudipTab from './StudipTabs/StudipTab.vue'

export default {
    install(Vue, options) {
        Vue.component("studip-button", StudipButton);
        Vue.component("studip-icon", StudipIcon);
        Vue.component("studip-link-button", StudipLinkButton);

        Vue.component("studip-header-navigation", StudipHeaderNavigation);
        Vue.component("studip-header-navigation-item", StudipHeaderNavigationItem);

        Vue.component("studip-sidebar", StudipSidebar);
        Vue.component("studip-sidebar-links-widget", StudipSidebarLinksWidget);
        Vue.component("studip-sidebar-links-element", StudipSidebarLinksElement);

        Vue.component("studip-tabs", StudipTabs);
        Vue.component("studip-tab", StudipTab);

        Vue.prototype.$studipAssetsUrl = options.studipAssetsUrl || ''
    }
};
