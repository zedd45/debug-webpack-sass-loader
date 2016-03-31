// Import React and HelloText class
import React from 'react';
import HelloText from './HelloText';
import styles from '../css/master.scss';


console.log('styles are: ', styles);

// Create class called HelloBox that extends the base React Component class
export default class HelloBox extends React.Component {

    constructor() {

        super();
    }

    render() {

        return (
            <div className={styles.HelloBox}>
              <HelloText name="Zedd45" />
            </div>
        );
    }
}
