import React, { Component } from 'react'

import Loading from '../../components/loading'
import PeopleList from '../../components/peopleList'
import { GetPeople } from '../../services/people'

export default class People extends Component {
    constructor(props) {
        super(props);

        this.state = { peopleList: [] };
    }

    async componentDidMount() {
        var people = await GetPeople();
        this.setState({ peopleList: people });

        //or 
        // GetPeople().then(people => {
        //     this.setState({ peopleList: people });
        // })
    }

    showPerson = (personId) => {
        this.props.history.push('/person/' + personId);
    }

    render() {
        if (this.state.peopleList.length === 0) { return <Loading />; }

        return (
            <section>
                <PeopleList showPerson={this.showPerson} people={this.state.peopleList} />
            </section>
        )
    }
}
