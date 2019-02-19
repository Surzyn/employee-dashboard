import React, { Component } from 'react'

import { capitalizeFirstLetter } from '../../services/helpers'
import './item.css';


export default class PersonDetails extends Component {
    render() {
        return (
            <div onClick={this.showPersonDetails} className='person-item'>
                <img src={this.props.person.picture} alt="person" />
                <div className='person-details'>
                    <strong>{capitalizeFirstLetter(this.props.person.firstName)} {capitalizeFirstLetter(this.props.person.lastName)}</strong>
                    <br />
                    <span>{this.props.person.position}</span>
                </div>
            </div>
        )
    }

    showPersonDetails = () => {
        this.props.showPerson(this.props.person.id);
    }
}



