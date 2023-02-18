import React from 'react';
import {baseUrl} from "../utils/constants";

class AboutMe extends React.Component{

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        fetch(`${baseUrl}/v1/peoples/1`)
            .then(r => r.json())
            .then(d => this.setState({
                name: d.name,
                birth_year: d.birth_year,
                img: `${baseUrl}/${d.image}`

            }))

    }

    render() {
        return (
            <div>
                {this.state.name}<br/>
                {this.state.birth_year}<br/>
                <img src={this.state.img} alt='sw hero'/>
            </div>
        );
    }

}

export default AboutMe;