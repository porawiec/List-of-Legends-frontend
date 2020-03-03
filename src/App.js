import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ChampDetails from './components/champ/ChampDetails'
import FriendShow from './components/friend/FriendShow'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import { getProfileAction } from './store/actions/authActions'
import { getFriendsAction } from './store/actions/userActions'

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
            console.log('asfdasf', userObj)
              throw(userObj.error)
          }
      if (!userObj.error) {
        // console.log(userObj)
          this.props.getProfile(userObj.user)
          this.props.getFriends(userObj.user)

      } else {
          alert(userObj.error)
          localStorage.removeItem('token')
      }
      }
      )
      .catch(err => {
        console.log(err)
      })
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
            <Route path='/user/:id' component={FriendShow} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  // console.log('dash map dispatch to props', dispatch)
  return {
      getProfile: (user) => {
        dispatch(getProfileAction(user))
      },

      getFriends: (user) => {
        dispatch(getFriendsAction(user))
    }
  }
}

export default connect(null, mapDispatchToProps)(App);
