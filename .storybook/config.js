import { configure } from '@storybook/vue';

// automatically import all files ending in *.stories.js
const req = require.context('../components', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

import "!style-loader!css-loader?url=false!../assets/stylesheets/studip-base.css"

configure(loadStories, module);
