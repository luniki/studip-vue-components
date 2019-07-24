import StudipButton from './StudipButton/StudipButton.vue'
import StudipIcon from './StudipIcon/StudipIcon.vue'
import StudipLinkButton from './StudipLinkButton/StudipLinkButton.vue'
// import StudipSidebar from './StudipSidebar/StudipSidebar.vue'

export default {
    install(Vue, options) {
        Vue.component("studip-button", StudipButton);
        Vue.component("studip-icon", StudipIcon);
        Vue.component("studip-link-button", StudipLinkButton);
        // Vue.component("studip-button", StudipButton);
    }
};
