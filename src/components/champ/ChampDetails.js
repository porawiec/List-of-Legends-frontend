import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getChampsAction } from '../../store/actions/wishActions'
import { getChampsFailAction } from '../../store/actions/wishActions'
import { postNewWishAction } from '../../store/actions/wishActions'
import { deleteWishAction } from '../../store/actions/wishActions'



class ChampDetails extends Component {

    componentDidMount() {
        const reqObj = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
            }
       
        fetch(`http://localhost:3000/champs`, reqObj)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error)
            }
            console.log(res)
            this.props.getChampsSuccess(res)
        })
        .catch((err) => {
            this.props.getChampsFailure(err)
        })
    }
    
    toggleWishStatus = (target) => {
        console.log(target)
        console.log('props', this.props)
        this.props.postNewWish(target)

        // const reqObj = {
        //     method: 'POST',
        //     headers: {
        //         Authorization: `Bearer ${localStorage.getItem('token')}`,
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     },
        //     body: JSON.stringify({skin: target})
        // }
    
        // fetch('http://localhost:3000/wishes', reqObj)
        //     .then(res => res.json())
        //     .then(wish => {
        //         if(wish.error) {
        //             throw(wish.error)
        //         }
        //     if (!wish.error) {
        //         this.props.postNewWish(wish)
        //     } else {
        //         alert(wish.error)
        //     }
        //     }
        //     )


    }


    render(){
        const { champs } = this.props
        const id = this.props.match.params.id

        console.log('params', this.props.match.params)
        // console.log('champ props', champs)
        const selectedChamp = champs.find(champ => champ.id === parseInt(id));
        console.log('champ id', !selectedChamp ? null : selectedChamp.skins)

        
    return (
    <div className="ui three column grid">
        {!selectedChamp ? null : selectedChamp.skins.map(skin => (
            <div className= "ui column">
                <div className="ui centered card">
                    <div className="row">
                        <h2 className="ui center aligned">{skin.name === 'default' ? selectedChamp.name : skin.name}</h2>
                    </div>
                    <div className ="row">
                        <img src={skin.splash_img} className="ui huge image" />
                        {/* <button class="ui button fluid" onClick={this.toggleWishStatus}>{this.state.wish ? 'Remove from Wishlist' : 'Add to Wishlist!'}</button> */}
                        <button className="ui button fluid teal" onClick={() => this.toggleWishStatus(skin)}>
                            <i className="add icon"></i>
                            Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>
        ))}
    </div>
    )
    }}
// }

const mapStateToProps = (state) => {
    console.log('show page map state to props', state)
    return {
        champs: state.wish.champs
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('show page map dispatch to props', dispatch)
    return {
        getChampsSuccess: (champs) => {
            dispatch(getChampsAction(champs))
        },
        getChampsFailure: (error) => {
            dispatch(getChampsFailAction(error))
        },
        postNewWish: (wish) => {
            dispatch(postNewWishAction(wish))
        },
        deleteWish: (wish) => {
            dispatch(deleteWishAction(wish))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ChampDetails))