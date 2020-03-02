import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class FriendsList extends Component {

    
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
                        {console.log(this.props.friends)}
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
            friends: state.user.friends
        }
    }

    const mapDispatchToProps = (dispatch) => {
        // console.log('friends list map dispatch to props', dispatch)
        return {

        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FriendsList))