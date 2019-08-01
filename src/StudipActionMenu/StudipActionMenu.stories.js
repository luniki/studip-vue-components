import { storiesOf } from '@storybook/vue';
import StudipActionMenu, { createLink, createButton } from './StudipActionMenu';

storiesOf('StudipActionMenu', module).add('normal', () => ({
    components: { StudipActionMenu },
    template: `
        <div id="layout_wrapper">
            <div id="layout_page">
                <div id="layout_container">
                    <div id="layout_content">
                        <table class="default">
                            <tbody>

                                <tr>
                                    <td class="actions">
                                        <studip-action-menu :actions="actions1" />
                                    </td>
                                </tr>

                                <tr>
                                    <td class="actions">
                                        <studip-action-menu :actions="actions2" />
                                    </td>
                                </tr>

        </tbody></table><p v-for="_ in [...Array(5)]">{{ lorem }}</p></div></div></div></div>
`,
    data: () => ({
        actions1: [
            createLink('url1', 'link 1'),
        ],
        actions2: [
            createLink('url1', 'link 1'),
            createLink('url2', 'link 2', 'crown'),
            createButton('name1', 'button 1'),
            createButton('name2', 'button 2', 'crown')
        ],
        lorem: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    })
}));
