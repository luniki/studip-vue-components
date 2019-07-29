import { storiesOf } from '@storybook/vue';
import StudipTabs from './StudipTabs';
import StudipTab from './StudipTab';

storiesOf('StudipTabs', module).add('normal', () => ({
    components: { StudipTabs, StudipTab },
    template: `
        <div id="layout_wrapper">
            <div id="layout_page">
                <div id="tabs_wrapper">

      <studip-tabs>
        <studip-tab url="#" label="Blubber" />
        <studip-tab url="#" label="Wer ist online?" active />
        <studip-tab url="#" label="Kontakte" />
        <studip-tab url="#" label="Studiengruppen" />
        <studip-tab url="#" label="Rangliste" />
      </studip-tabs>

                </div>
            </div>
        </div>
    `
}));
