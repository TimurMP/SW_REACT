import React, {Component} from 'react';
import {baseUrl} from "../utils/constants";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }

    }

    componentDidMount() {
        const ttl = localStorage.getItem('ttl_planets');
        const now = Date.now();

        const planets = localStorage.getItem('planets');

        if (planets && now < (+ttl)){
            this.setState(JSON.parse(planets))
            this.setState({isLoading: false})
        }else {
            fetch(`${baseUrl}/v1/planets`)
                .then(r => r.json())

                .then(a => a.map((p) => p.name))
                .then(p => {
                    const date = new Date(Date.now());
                    const ttl = date.setDate(date.getDate()+30);
                    this.setState({planets: p, isLoading: false}
                        , () => {
                            const planets = JSON.stringify({'planets': p})
                            localStorage.setItem('planets', planets)
                            localStorage.setItem('ttl_planets', JSON.stringify(ttl))
                        } )

                })

        }


    }


    render() {
        console.log('Render Contact Class')
        if (this.state.isLoading) {
            return (
                <div className='spinner-border text-primary'></div>
            )
        } else {

            return (
                <div>
                    <form action="action_page.php">

                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                        <label htmlFor="country">Country</label>
                        <select id="country" name="country">
                            {this.state.planets.map(p => <option value={p} key={p}>{p}</option>)}


                            {/*<option value={this.state.planets.map()}>sdfsfd</option>*/}

                        </select>

                        <label htmlFor="subject">Subject</label>


                        <input type="submit" value="Submit"/>

                    </form>
                </div>
            );
        }
    }
}


export default Contact;

