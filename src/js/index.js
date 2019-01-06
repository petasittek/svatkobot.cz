import { h, render } from 'preact';

import App from './containers/App.js';
import { getTodayAnchor } from './utils/date';

const mountNode = document.querySelector('.svatkobot');
render(<App />, mountNode, mountNode.lastChild);

if (!window.location.hash) {
  window.location = `#${getTodayAnchor()}`;
}
