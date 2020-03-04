import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { postNewFriendAction, deleteFriendAction } from '../../store/actions/userActions'


class FriendsList extends Component {
    state = {
        friendSearchBar: ''
    }

    handleChange = (e) => {
        // console.log(e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
        // console.log(this.state)
      }
    
    clickedFriend = (friend) => {
        // console.log('handle click friend', friend)
        // console.log('handle click friend id', friend.id)
        this.props.history.push(`/user/${friend.id}`)
    }

    addFriend = () => {
        // console.log('handle click champ', friend)
        // console.log('handle click friend id', friend.id)
        const friendshipInfo = {
            friendUsername: this.state.friendSearchBar,
            user_id: this.props.currentUser.id
        }

        const reqObj = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(friendshipInfo)
            
        }
    
        fetch('http://localhost:3000/createFriendWithName', reqObj)
            .then(res => res.json())
            .then(friendObj => {
            if (!friendObj.error) {
                console.log('friendobj ------------->', friendObj)
                this.props.postNewFriend(friendObj.friend)
            } else {
                alert(friendObj.error)
            }}
            )
    }

    removeFriend = (friend) => {
        // console.log('handle click champ', friend)
        // console.log('handle click friend id', friend.id)
        const friendshipInfo = {
            friend_id: friend.id,
            user_id: this.props.currentUser.id
        }

        const reqObj = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(friendshipInfo)
            
        }
    
        fetch('http://localhost:3000/destroyFriendWithIds', reqObj)
            // .then(res => res.json())
            this.props.deleteFriend(friend)
    }


      render(){
        
        const divStyle={
            overflowY: 'scroll',
            // border:'1px solid red',
            // width:'500px',
            // float: 'left',
            height:'450px',
            position:'relative',
            backgroundColor: 'blue'
        }
        
        const { friends } = this.props
        console.log(this.props)
        return(

            <div style={divStyle}>
                <div className="ui fluid icon input">
                    <input type="text" id="friendSearchBar" placeholder={"Add friend..."} onChange={this.handleChange}/>
                    <i onClick={this.addFriend} className="circular add link icon"></i>
                </div>
                {/* <div class="ui hidden divider"></div> */}

                <h2>Friends</h2>
                    <table class="ui celled table">
                        <tbody>
                            {/* map over current current_user.friends and display in list */}
                            {/* {console.log(this.props)} */}
                            {friends ? friends.map (friend =>
                            <tr>
                                <td className={"selectable fifteen wide"} onClick={() => this.clickedFriend(friend)}>
                                    <a> {friend.username} </a>
                                </td>
                                <td className="selectable right aligned">
                                    <a onClick={() => this.removeFriend(friend)}> Delete </a>
                                </td>
                            </tr>
                            )
                            :   <div className="ui segment">
                                    <div className="ui active loader"></div>
                                </div>
                            }
                        </tbody>
                    </table>

                {/* <h2>Friended by Users</h2>
                    <table class="ui celled table">
                        <tbody>
                            {/* map over current current_user.friends and display in list */}
                            {/* {console.log(this.props)} */}
                            {/* {friends ? friends.map (friend =>
                            <tr>
                                <td className={"selectable fifteen wide"} onClick={() => this.clickedFriend(friend)}> <a href=""> {friend.username} </a> </td>
                                <td className="selectable right aligned">
                                    <a href="">Delete</a>
                                </td>
                            </tr>
                            )
                            :   <div className="ui segment">
                                    <div className="ui active loader"></div>
                                </div>
                            }
                        </tbody>
                    </table> */}
            </div>
        )}
    }


    const mapStateToProps = (state) => {
        // console.log('friends list map state to props', state)
        return {
            friends: state.user.friends,
            currentUser: state.auth.currentUser
        }
    }

    const mapDispatchToProps = (dispatch) => {
        // console.log('friends list map dispatch to props', dispatch)
        return {
            postNewFriend: (friend) => {
                dispatch(postNewFriendAction(friend))
            },

            deleteFriend: (friend) => {
                dispatch(deleteFriendAction(friend))
            }
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FriendsList))