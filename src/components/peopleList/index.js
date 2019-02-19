import React from 'react'
import './peopleList.css'

import PersonDetails from '../personDetails'
import { generateId } from '../../services/helpers'

const peopleList = ({ people, showPerson }) => {
    var items = people.map(person => {
        return <PersonDetails showPerson={showPerson} key={generateId('person')} person={person} />
    });

    return (
        <div id='peopleContainer'>
            {items}
        </div>
    )
}

export default peopleList
