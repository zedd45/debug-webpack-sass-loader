import React from 'react';
import styles from '../css/subfolder/another-file.scss';


export default class HelloText extends React.Component {

    constructor(props) {

        super(props);
    }

    render() {

        return (<p className={styles.Square}>Hello, {this.props.name}!</p>);
    }
}
