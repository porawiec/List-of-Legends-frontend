import React, { Component } from 'react'
// import Notifications from './Notifications'
import ChampSelect from '../champ/ChampSelect'
import Wishlist from '../champ/Wishlist'
import FriendsList from '../friend/FriendsList'

class Dashboard extends Component {

    render(){

        return(
        <div>
            <div className="ui divided two column">
                <div className="row">

                    <div className="ui three column grid">
                        
                        <div className="column">
                            <div className="ui segment">
                                Personal Wishlist
                                <div class="ui hidden divider"></div>
                                <Wishlist />
                            </div>
                        </div>

                        <div className="column">
                            <div className="ui segment">
                                Friend Notifications
                                <img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" alt="alt text" className="ui image" />
                            </div>
                        </div>

                        <div className="column">
                            <div className="ui segment">
                                Friends List
                                <FriendsList />
                                {/* <img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" alt="alt text" className="ui image" /> */}
                            </div>
                        </div>

                    </div>


                </div>

            </div>
                <div className="stretched row">
                    <div className="twelve wide column">
                        <div className="ui segment">
                            Roster of Champions
                            <ChampSelect />
                        </div>
                    </div>
                </div>
            
        </div>
        )
    }
}

export default Dashboard