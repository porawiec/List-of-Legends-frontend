import React, { Component } from 'react'
import { connect } from 'react-redux'

class ChampDetails extends Component {


    renderInfo = () => {
        const {skin} = this.props

        return (<div>
                <p>{skin.name}</p>
                <img src={skin.splash_img} class="ui image" />
            </div>
        )
    }
    
    toggleWishStatus = () => {
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
        const { skins } = this.props

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
                <button>Add to Wishlist</button>
            </div>
            </div>
        ))}
    </div>
    )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('dash map state to props', state)
    return {
        skins: state.wish.skins,
        wishes: state.wish.wishes
    }
}

export default connect(mapStateToProps)(ChampDetails)