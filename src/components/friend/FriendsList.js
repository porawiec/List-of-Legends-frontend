import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class FriendsList extends Component {

    
    clickedFriend = (friend) => {
        // console.log('handle click friend', friend)
        // console.log('handle click friend id', friend.id)
        this.props.history.push(`/user/${friend.id}`)
    }

    addFriend = (friend) => {
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
        const { friends } = this.props
          return(

            <div style={divStyle}>
                <div className="ui fluid icon input">
                    <input type="text" id="searchBar" placeholder={"Add friend..."}/>
                    <i onClick={this.addFriend} className="circular add link icon"></i>
                </div>
                {/* <div class="ui hidden divider"></div> */}

                <h2>Friends</h2>
                    <ul>
                        {/* map over current current_user.friends and display in list */}
                        {/* {console.log(this.props)} */}
                        {friends ? friends.map (friend =>
                            <li onClick={() => this.clickedFriend(friend)}> {friend.username} </li>
                        )
                        :   <div className="ui segment">
                                <div className="ui active loader"></div>
                            </div>
                        }
                    </ul>

                <h2>Friended by Users</h2>
                    <ul>
                        {/* map over current current_user.inverse_friends and display in list */}
                        {/* {console.log(this.props)} */}
                        {friends ? friends.map (friend =>
                            <li onClick={() => this.clickedFriend(friend)}> {friend.username} </li>
                            )
                        :   <div className="ui segment">
                                <div className="ui active loader"></div>
                            </div>
                        }
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