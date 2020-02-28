import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { postNewWishAction } from '../../store/actions/userActions'
import { deleteWishAction } from '../../store/actions/userActions'



class ChampDetails extends Component {
    
    addWish = (skin) => {
        console.log(skin)
        console.log('props', this.props)
        
        const wishInfo = {
            skin_id: skin.id,
            user_id: this.props.currentUser.id
        }

        const reqObj = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(wishInfo)
            
        }
    
        fetch('http://localhost:3000/wishes', reqObj)
            .then(res => res.json())
            .then(wish => {
            if (!wish.error) {
                this.props.postNewWish(skin)
            } else {
                alert(wish.error)
            }}
            )
    }

    removeWish = (skin) => {
        console.log(skin)
        console.log('props', this.props)

        const champId = this.props.wishes.find(wish => wish.id === skin.id).id;


        const wishInfo = {
            wish: skin
        }

        const reqObj = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(wishInfo)
        }
    
        fetch(`http://localhost:3000/wishes/${champId}`, reqObj)
            .then(res => res.json())
            .then(wish => {
            if (!wish.error) {
                this.props.deleteWish(wish)
            } else {
                alert(wish.error)
            }
            }
            )
    }

   button = (skin) => {

     const hasSkin = this.props.wishes.find(wishedSkin => wishedSkin.id === skin.id)
     if (hasSkin) {
         return <button className="ui button fluid red" 
         onClick={() => this.removeWish(skin)}
         >
             <i className="minus circle icon"></i>
             Remove from Wishlist!
         </button>
     } else {
         return <button className="ui button fluid teal" onClick={() => this.addWish(skin)}>
         <i className="add icon"></i>
         Add to Wishlist!
     </button>
     }
   }

    render(){
        const { champs } = this.props
        const id = this.props.match.params.id

        console.log('params', this.props.match.params)
        // console.log('champ props', champs)
        const selectedChamp = champs.find(champ => champ.id === parseInt(id))
        // console.log('champ id', !selectedChamp ? null : selectedChamp.skins)


        
    return (
    <div className="ui three column grid">
        {!selectedChamp ? null : selectedChamp.skins.map(skin => (
            <div className= "ui column">
                <div className="ui centered card">
                    <div className="row">
                        <h2 className="ui center aligned">{skin.name === 'default' ? selectedChamp.name : skin.name}</h2>
                    </div>
                    <div className ="row">
                        <img src={skin.splash_img} alt={skin.name} className="ui huge image" />
                        {console.log('----------->', skin.name)}
                        { this.button(skin) }
                    </div>
                </div>
            </div>
        ))}
    </div>
    )
    }}

const mapStateToProps = (state) => {
    // console.log('show page map state to props', state)
    return {
        currentUser: state.auth.currentUser,
        champs: state.user.champs,
        wishes: state.user.wishes
    }
}

const mapDispatchToProps = (dispatch) => {
    // console.log('show page map dispatch to props', dispatch)
    return {

        postNewWish: (wish) => {
            dispatch(postNewWishAction(wish))
        },
        deleteWish: (wish) => {
            dispatch(deleteWishAction(wish))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ChampDetails))