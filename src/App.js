import React, { Component } from 'react';
import { BrowserRouter, Redirect, Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ChampDetails from './components/champ/ChampDetails'
import FriendShow from './components/friend/FriendShow'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import { getProfileAction } from './store/actions/authActions'
import { getFriendsAction } from './store/actions/userActions'
// import Background from '../src/images/Shadow_Isles_concept_4.jpg';
// import Background from '../src/images/dragon.jpeg';


const divStyle={
  // width: "100%",
  // height: "100%",
  // backgroundSize: "100%",
  // backgroundImage: `url(${Background})`

};

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
            console.log('profile fetch', userObj)
            
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
    const { currentUser } = this.props
    return (
      <BrowserRouter>
        <div style ={divStyle} className="background">
          <Navbar />
          <Switch>
            <Route exact path='/' render={() => {
              return currentUser.id ? < Dashboard /> : <Redirect to='/login' component={SignIn} />
            }} />
            <Route exact path='/champ/:id' render={() => {
              return currentUser.id ? < ChampDetails /> : <Redirect to='/login' component={SignIn} />
            }} />
            <Route exact path='/login' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/user/:id' render={() => {
              return currentUser.id ? < FriendShow /> : <Redirect to='/login' component={SignIn} />
            }} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
