const BASE_URL = 'https://us-central1-react-mspm.cloudfunctions.net/api';

var allPeople = [];

export function GetPeople() {
    return fetch(BASE_URL + '/people')
        .then(resp => resp.json())
        .then(people => {
            allPeople = people;
            return people;
        }).catch(err => console.log(err));
}

export function GetPerson(personId) {
    return allPeople.find(person => person.id == personId);
}