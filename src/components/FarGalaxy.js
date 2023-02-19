// import React from 'react';
import {baseUrl, text} from "../utils/constants";


import React, {Component} from 'react';
import styles from '../css/farGalaxy.module.css'


function returnMovieTextUrl() {
    let x = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    return `${baseUrl}/v1/films/${x}`
}


class FarGalaxy extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount() {
        const opening_crawl = sessionStorage.getItem('opening_crawl');
        if (opening_crawl) {
            this.setState({opening_crawl})


        } else {
            fetch(returnMovieTextUrl())
                .then(r => r.json())
                .then(d => {
                    this.setState({
                        opening_crawl: d.opening_crawl
                    });
                    sessionStorage.setItem('opening_crawl', d.opening_crawl);
                }

        )


        }


    }

    render() {

        return (
            <p className={styles.farGalaxy}>{this.state.opening_crawl}</p>
        );
    }

}


export default FarGalaxy;

