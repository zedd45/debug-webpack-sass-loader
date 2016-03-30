
// Import CSS
import '../css/master.scss';
import '../css/sublfolder/another-file.scss';

// Import React and JS
import HelloBox from './HelloBox';
import React from 'react';
import ReactDom from 'react-dom';

// Render!
ReactDom.render(<HelloBox />, document.querySelector('#app-container'));
