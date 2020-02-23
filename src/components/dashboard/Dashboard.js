import React, { Component } from 'react'
// import Notifications from './Notifications'
import { connect } from 'react-redux'
import getChamps from '../../store/actions/wishActions'
import ChampSelect from '../champ/ChampSelect'

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
            <div className='dashboard container'>
                <div className='row'>
                    <div className='col s12 m6'>
                        {/* <ChampSelect champs={champs} /> */}
                    </div>
                    <div className='col s12 m5 offset-m1'>
                        {/* <Notifications /> */}
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