import React, { Component } from 'react'
// import Notifications from './Notifications'
import ChampSelect from '../champ/ChampSelect'
import Wishlist from '../champ/Wishlist'
import FriendsList from '../friend/FriendsList'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// const divStyle={
//     position:'relative',
//     opacity: 0.8,
//     backgroundColor: 'BCF6FB'
// }


class Dashboard extends Component {

    clickedWishlist = (target) => {
        // console.log('handle click champ', target)
        // console.log('handle click champ id', target.champ_id)
        this.props.history.push(`/user/${target.id}`)
    }

    render(){
        const { currentUser } = this.props


        return(
        <div className="ui internally celled grid">
            <div className="row">
                <div className="nine wide column">
                    <button className="ui button" onClick={() => this.clickedWishlist(currentUser)}>Personal Wishlist</button>
                    
                    <div class="ui hidden divider"></div>
                    
                    <Wishlist />
                </div>

                <div className="three wide column">
                    <h2 class="ui header">Friend Notifications</h2>
                        <div className="ui segment">
                            <img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" alt="alt text" className="ui image" />
                        </div>
                </div>

                <div className="four wide column">
                    <FriendsList />
                </div>
            </div>

            <div className="row">
                <div className="sixteen wide centered column">
                    <h2 class="ui header">Champion Roster</h2>
                    <ChampSelect />
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log('dash map state to props', state)
    return {
        currentUser: state.auth.currentUser
    }
}

export default connect(mapStateToProps)(withRouter(Dashboard))