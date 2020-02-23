import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
// import ChampDetails from './components/champs/ChampDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
// import Friend from './components/notes/Friend'


class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            {/* <Route path='/champ/:id' component={ChampDetails} /> */}
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            {/* <Route path='/user/:id' component={Friend} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
