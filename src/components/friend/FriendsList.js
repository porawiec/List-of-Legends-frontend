import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class FriendsList extends Component {

    componentDidMount() {

        const reqObj = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
            }
        // console.log('------->', reqObj)

        fetch('http://localhost:3000/users', reqObj)
        .then(res => res.json())
        .then(res => {
           
            // debugger
            if(res.error) {
                throw(res.error)
            }
            
        //  return  this.props.getUsersSuccess(res)
        })
        .catch((error) => {
            // console.log('get users error', error)
            // this.props.getUsersFailure(error)
        })
    }

    clickedFriend = (friend) => {
        // console.log('handle click champ', friend)
        // console.log('handle click friend id', friend.id)
        this.props.history.push(`/user/${friend.id}`)
    }

    
      render(){
        
        const divStyle={
            overflowY: 'scroll',
            // border:'1px solid red',
            // width:'500px',
            // float: 'left',
            height:'450px',
            position:'relative'
        };

          return(

            <div style={divStyle}>
                <h2>Friends</h2>
                    <ul>
                        {/* map over current current_user.friends and display in list */}
                        <li> Friend Name 1</li>
                        <li> Friend Name 2 </li>
                        <li> Friend Name 3</li>
                    </ul>

                <h2>Friended by Users</h2>
                    <ul>
                        {/* map over current current_user.inverse_friends and display in list */}
                        <li>Friendee 1</li>
                        <li>Friendee 2</li>
                        <li>Friendee 3</li>
                    </ul>
            </div>
        )}
    }


    const mapStateToProps = (state) => {
        // console.log('friends list map state to props', state)
        return {
            currentUser: state.auth.currentUser
        }
    }

    const mapDispatchToProps = (dispatch) => {
        // console.log('friends list map dispatch to props', dispatch)
        return {

        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FriendsList))