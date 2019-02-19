import React, { Component } from 'react'
import './contact.css'

export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
            webUrl: '',
            message: 'Awesome page'
        };
    }

    showDetails = () => {
        console.log(this.state);
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
    }

    render() {
        return (
            <div className="container">
                <form id="contact" action="">
                    <h3>Contact Form</h3>
                    <fieldset>
                        <input onChange={this.handleChange} name='name' value={this.state.name} placeholder="Your name" type="text" required />
                        <input onChange={this.handleChange} name='email' value={this.state.email} placeholder="Your Email Address" type="email" required />
                        <input onChange={this.handleChange} name='phone' value={this.state.phone} placeholder="Your Phone Number" type="tel" required />
                        <input onChange={this.handleChange} name='webUrl' value={this.state.webUrl} placeholder="Your Web Site" type="url" required />
                        <textarea onChange={this.handleChange} name='message' value={this.state.message} placeholder="Type your message here...." required></textarea>
                        <button name="submit" type="button" onClick={this.showDetails} id="contactSubmit">Submit</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}
