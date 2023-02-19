import React from 'react';
import {baseUrl} from "../utils/constants";

class AboutMe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        // const luke = ['name', 'birth_year', 'img'];
        // const birth_year = localStorage.getItem('birth_year');
        // const img = localStorage.getItem('img');
        // const name = localStorage.getItem('name');
        const ttl = localStorage.getItem('ttl');
        const now = Date.now();
        console.log(ttl);
        console.log(now);

        // if (now < (+ttl)){
        //
        // }
        const luke = localStorage.getItem('luke');
        if (luke && now < (+ttl)) {
            // const ll = JSON.parse(luke)
            // console.log(ll)
            this.setState(JSON.parse(luke))
            // this.setState({birth_year})
            // this.setState({name})
        } else {

            fetch(`${baseUrl}/v1/peoples/1`)
                .then(r => r.json())
                .then(d => {
                    const date = new Date(Date.now());
                    // const ttt = Date.now()
                    const ttl = date.setDate(date.getDate()+30);
                    // const ttl = date.setMinutes(date.getMinutes()+3);
                    // console.log(ttl)
                    // console.log(ttt)
                        this.setState({
                            luke: {
                                name: d.name,
                                birth_year: d.birth_year,
                                img: `${baseUrl}/${d.image}`
                            }
                        }, () => {
                            const luke = JSON.stringify({'luke': this.state.luke})
                            localStorage.setItem('luke', luke);
                            localStorage.setItem('ttl', JSON.stringify(ttl))


                        })

                        // localStorage.setItem('name', d.name);
                        // localStorage.setItem('birth_year', d.birth_year);
                        // localStorage.setItem('img', `${baseUrl}/${d.image}`);
                    }
                );


        }


    }

    render() {
        if (this.state.luke) {
            return (
                <div>
                    {this.state.luke.name}<br/>
                    {this.state.luke.birth_year}<br/>
                    <img src={this.state.luke.img} alt='sw hero'/>
                </div>
            );

        }

    }

}

export default AboutMe;