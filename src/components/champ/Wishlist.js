import React, { Component } from 'react'
import { connect } from 'react-redux'

class Wishlist extends Component {

    
    render(){
        console.log('asdfasdfasfd')
        const { wishes } = this.props
        
    return (
    <div class="ui six cards">
        {wishes.map(wish => (
            <div className="ui raised card">
              
                    <h4 className="ui center aligned">{wish.name === 'default' ? "Champion" : wish.name}</h4>
                
                    <img onClick={() => this.clickedChamp(wish)} src={wish.loading_img} className="ui small image" />
               
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