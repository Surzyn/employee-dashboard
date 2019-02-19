import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Header from './components/header'
import Home from './views/home'
import PeopleList from './views/people'
import Person from './views/person'
import Contact from './views/contact'
import NotFound from './views/notFound'

class App extends Component {
  render() {
    return (
      <BrowserRouter className="App">
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/people' component={PeopleList} />
            <Route path='/person/:id' component={Person} />
            <Route path='/contact' component={Contact} />
            <Route path='**' component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
