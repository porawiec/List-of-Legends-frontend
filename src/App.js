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
      .then(userObj => {
          if(userObj.error) {
              throw(userObj.error)
          }
      if (!userObj.error) {
          this.props.getProfile(userObj.user)

      } else {
          alert(userObj.error)
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
      getProfile: (user) => {
          dispatch(getProfileAction(user))
      }

  }
}

export default connect(null, mapDispatchToProps)(App);
