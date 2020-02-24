import React, { Component } from 'react'
// import Notifications from './Notifications'
import { connect } from 'react-redux'
import getChamps from '../../store/actions/wishActions'
import ChampSelect from '../champ/ChampSelect'
import { Grid, Segment } from 'semantic-ui-react'

class Dashboard extends Component {

    componentDidMount() {
        const {champs} = this.props

        fetch('http://localhost:3000/champs')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error)
            }
            // dispatch({ type: 'GET_CHAMPS', notes: res})
            return res
        })
        .catch((err) => {
            // dispatch({ type: 'GET_CHAMPS_ERROR', err})
        })
    }

    render(){
        console.log('dash props',this.props)
        const { champs } = this.props

        return(
            <div>
                <div>
                    <div>
                        {/* <Wishlist champs={champs} /> */}
                    </div>
                    <div>
                        {/* <ChampSelect champs={champs} /> */}
                    </div>
                    <div>
                        {/* <Notifications /> */}
                    </div>
                    <div>
                        {/* <FriendsList /> */}
                    </div>
                </div>
            <div className="ui divided two column grid">
                <div className="stretched row">
                    <div className="eight wide column">
                        <div class="ui segment">
                            Personal Wishlist
                            <img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" class="ui image" />
                        </div>
                    </div>
                    <div className="four wide column">
                        <div className="ui segment">
                            Friend Notifications
                            <img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" class="ui image" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="ui right one column grid">
                <div className="four wide column">
                    <div className="ui segment">
                        Friends List
                        <img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" class="ui image" />
                    </div>
                </div>
            </div>
            <div className="ui divided one  column grid">
                <div className="stretched row">
                    <div className="twelve wide column">
                        <div class="ui segment">
                            Roster of Champions
                            <img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" class="ui image" />
                            <div class="ui grid">
                                <div class="column">
                                    <img src="https://react.semantic-ui.com/images/wireframe/image.png" class="ui image" />
                                </div>
                                <div class="column">
                                    <img src="https://react.semantic-ui.com/images/wireframe/image.png" class="ui image" />
                                </div>
                                <div class="column">
                                    <img src="https://react.semantic-ui.com/images/wireframe/image.png" class="ui image" />
                                </div>
                                <div class="column">
                                    <img src="https://react.semantic-ui.com/images/wireframe/image.png" class="ui image" />
                                </div>
                                <div class="column">
                                    <img src="https://react.semantic-ui.com/images/wireframe/image.png" class="ui image" />
                                </div>
                                <div class="column">
                                    <img src="https://react.semantic-ui.com/images/wireframe/image.png" class="ui image" />
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
        )
    }
}



const mapStateToProps = (state) => {
    console.log('dash map state to props', state)
    return {
        champs: state.wish.champs,
        wishes: state.wish.wishes
    }
}

const mapDispatchToProps = (state) => {
    console.log('dash map state to props', state)
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)