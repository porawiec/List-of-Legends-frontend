import React, { Component } from 'react'
import FriendFeed from '../friend/FriendFeed'
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
                    <button className="ui huge blue button" onClick={() => this.clickedWishlist(currentUser)}>Personal Wishlist</button>
                    
                    <div class="ui hidden divider"></div>
                    
                    <Wishlist />
                </div>

                <div className="three wide column">
                    <div className="ui raised text compact segment">
                        <h2 className="ui header">Friend Feed</h2>
                    </div>
                        <div className="ui segment">
                            <FriendFeed />
                            {/* <img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" alt="alt text" className="ui image" /> */}
                        </div>
                </div>

                <div className="four wide column">
                    <FriendsList />
                </div>
            </div>

            <div className="row">
                <div className="sixteen wide centered column">
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