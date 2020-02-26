import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ChampDetails from './components/champ/ChampDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import { getProfileAction } from './store/actions/authActions'
// import Friend from './components/notes/Friend'


class App extends Component {
  componentDidMount = () => {
    const token = localStorage.token

    const reqObj = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
      }
    }

  fetch('http://localhost:3000/profile', reqObj)
      .then(res => res.json())
      .then(cred => {
          if(cred.error) {
              throw(cred.error)
          }
      if (!cred.error) {
          this.props.getProfile(cred.user)
      } else {
          alert(cred.error)
          localStorage.removeItem('token')
      }
      }
      )
  }

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/champ/:id' component={ChampDetails} />
            <Route path='/login' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            {/* <Route path='/user/:id' component={Friend} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('dash map dispatch to props', dispatch)
  return {
      getProfile: (cred) => {
          dispatch(getProfileAction(cred))
      }
  }
}

export default connect(null, mapDispatchToProps)(App);
