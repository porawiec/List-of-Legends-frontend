import React, { Component } from 'react'
import { connect } from 'react-redux'

class ChampDetails extends Component {
    
    toggleWishStatus = () => {
        console.log("hello")
        this.setState( prevState => {
            return {
                wish: !prevState.wish
            }
        })
    }

    // toggleWish = (skin) => {
    //     // console.log(skin)
        
    //     let wishedFor = this.state.skins.map(skin => {
    //       if (skin.id === champ.id) {
    //         return { 
    //           ...skin,
    //           wish: !skin.wish
    //           }
    //         } else {
    //           return skin
    //         }
    //     })
        
    //     this.setState({
    //       skins: wishedFor
    //     })
    //   }
    
    render(){
        console.log('asdfasdfasfd')
        const { champ, skins } = this.props
        
    return (
    <div class="ui three column grid">
        {skins.map(skin => (
            <div class= "ui column">
                <div class="row">
                    <h2>{skin.name === 'default' ? "Champion" : skin.name}</h2>
                </div>
                <div class ="row">
                    <img src={skin.splash_img} class="ui huge image" />
                    {/* <button class="ui button fluid" onClick={this.toggleWishStatus}>{this.state.wish ? 'Remove from Wishlist' : 'Add to Wishlist!'}</button> */}
                    <button onClick={this.toggleWishStatus}>Add to Wishlist</button>
                </div>
            </div>
        ))}
    </div>
    )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('dash map ownProps to props', ownProps)
    let id = ownProps.match.params.champ_id
    
    return {
        champ: state.wish.champs.find((champ) => champ.id === id),
        skins: state.wish.skins,
        wishes: state.wish.wishes
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('skins page map dispatch to props', dispatch)
    return {
        getSkins: (champ_id) => { dispatch({type: 'GET_CHAMP_SKINS', champ_id}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampDetails)