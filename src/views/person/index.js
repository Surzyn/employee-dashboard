import React, { Component } from 'react'
import './person.css';

import { GetPerson } from '../../services/people'

export default class Person extends Component {
    render() {
        var personId = this.props.match.params.id;
        if (!personId) {
            this.props.history.push('/people');
            return null;
        }

        var person = GetPerson(personId);
        if (!person) {
            this.props.history.push('/people');
            return null;
        }

        return (
            <div className='card'>
                <div>
                    <img src={person.picture} alt="person" />
                </div>
                <div><span>position:</span> <strong>{person.position}</strong></div>
                <div><span>first name:</span> <strong>{person.firstName}</strong></div>
                <div><span>last name:</span> <strong>{person.lastName}</strong></div>
                <div><span>gender:</span> <strong>{person.gender}</strong></div>
                <div><span>id:</span> <strong>{person.id}</strong></div>
                <div><span>mobile:</span> <strong>{person.mobile}</strong></div>
                <div><span>email:</span> <strong>{person.email}</strong></div>
            </div>
        )
    }
}

