import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Wishlist extends Component {

clickedChamp = (target) => {
    // console.log('handle click champ', target)
    // console.log('handle click champ id', target.champ_id)
        this.props.history.push(`/champ/${target.champ_id}`)
    }
    
    renderWishCard = () => {
        const { wishes, champs } = this.props
        return wishes.map(wish => {
        const findChamp = champs.find(champ => champ.id === wish.champ_id)

            if (!findChamp) {
                return <div className="ui segment">
                     <div className="ui active loader"></div>
                </div>
                // null
            }
            
            return <div className="ui raised card">
                {/* {console.log(findChamp)} */}
                    <h4 className="ui center aligned">{wish.name === 'default' ? findChamp.name : wish.name}</h4>                
                    <img alt={wish.name} onClick={() => this.clickedChamp(wish)} src={wish.loading_img} className="ui small image" />
                </div>
        }
    )}
     
    
    render(){
        
        const divStyle={
            overflowY: 'scroll',
            // border:'1px solid red',
            // width:'500px',
            // float: 'left',
            height:'450px',
            position:'relative'
        };
        
        
        return (
            <div style= {divStyle} className="ui three cards">
                {this.renderWishCard()}   
            </div>
    )
    }
}

const mapStateToProps = (state) => {
    // console.log('wishlist map state to props', state)
    
    return {
        currentUser: state.auth.currentUser,
        champs: state.user.champs,
        wishes: state.user.wishes
    }
}

export default connect(mapStateToProps)(withRouter(Wishlist))