
// Import _global_ CSS
import '../css/master.scss';


// Import React and JS
import HelloBox from './HelloBox';
import React from 'react';
import ReactDom from 'react-dom';

// Render!
ReactDom.render(<HelloBox />, document.querySelector('#app-container'));
