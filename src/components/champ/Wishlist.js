import React, { Component } from 'react'
import { connect } from 'react-redux'

class Wishlist extends Component {

    
    render(){
        console.log('asdfasdfasfd')
        const { wishes } = this.props
        
    return (
    <div class="ui three column grid">
        {wishes.map(wish => (
            <div class= "ui column">
                <div class="row">
                    <h4>{wish.name === 'default' ? "Champion" : wish.name}</h4>
                </div>
                <div class ="row">
                    <img src={wish.loading_img} class="ui small image" />
                </div>
            </div>
        ))}
    </div>
    )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('dash map ownProps to props', ownProps)
    // let id = ownProps.match.params.champ_id
    
    return {
        // champ: state.wish.champs.find((champ) => champ.id === id),
        skins: state.wish.skins,
        wishes: state.wish.wishes
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('skins page map dispatch to props', dispatch)
    return {
        getWishes: (skin_id) => { dispatch({type: 'GET_WISH_SKINS', skin_id}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist)