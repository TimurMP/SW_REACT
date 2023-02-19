import React from 'react';
import {baseUrl} from "../utils/constants";

class AboutMe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        // const luke = ['name', 'birth_year', 'img'];
        const birth_year = localStorage.getItem('birth_year');
        const img = localStorage.getItem('img');
        const name = localStorage.getItem('name');
        if (birth_year && img && name) {
            this.setState({img})
            this.setState({birth_year})
            this.setState({name})
        } else {

            fetch(`${baseUrl}/v1/peoples/1`)
                .then(r => r.json())
                .then(d => {
                        this.setState({
                            name: d.name,
                            birth_year: d.birth_year,
                            img: `${baseUrl}/${d.image}`

                        })
                    localStorage.setItem('name', d.name);
                    localStorage.setItem('birth_year', d.birth_year);
                    localStorage.setItem('img', `${baseUrl}/${d.image}`);
                    }
                );


        }


    }

    render() {
        console.log('Render AboutMe Class')
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