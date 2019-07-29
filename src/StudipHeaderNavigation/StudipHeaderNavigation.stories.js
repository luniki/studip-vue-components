import { storiesOf } from '@storybook/vue';
import StudipHeaderNavigation from './StudipHeaderNavigation';
import StudipHeaderNavigationItem from './StudipHeaderNavigationItem';

storiesOf('StudipHeaderNavigation', module).add('normal', () => ({
    components: { StudipHeaderNavigation, StudipHeaderNavigationItem },
    template: `
        <div id="layout_wrapper">
            <div id="flex-header">

      <studip-header-navigation>
        <studip-header-navigation-item url="" icon="home" label="Home" />
        <studip-header-navigation-item url="" icon="seminar" label="Veranstaltungen" active />
        <studip-header-navigation-item url="" icon="mail" label="Nachrichten" />
        <studip-header-navigation-item url="" icon="community" label="Community" />
      </studip-header-navigation>

            </div>
        </div>
    `
}));
