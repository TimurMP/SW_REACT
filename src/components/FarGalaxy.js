// import React from 'react';
import {baseUrl, text} from "../utils/constants";


import React, {Component} from 'react';





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
        fetch(returnMovieTextUrl())
            .then(r => r.json())
            .then(d => this.setState({
                text: d.opening_crawl
            }))

    }

    render() {

        return (
            <p className="farGalaxy">{this.state.text}</p>
        );
    }

}


export default FarGalaxy;

