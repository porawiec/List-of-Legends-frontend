import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getChampsAction, getChampsFailAction, getUserAction } from '../../store/actions/userActions'


class FriendShow extends Component {

    componentDidMount() {

        const reqObj = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
            }
        // console.log('------->', reqObj)

        fetch('http://localhost:3000/champs', reqObj)
        .then(res => res.json())
        .then(res => {
           
            // debugger
            if(res.error) {
                throw(res.error)
            }
            
         return  this.props.getChampsSuccess(res)
        })
        .catch((error) => {
            this.props.getChampsFailure(error)
        })

        const friend = this.props.match.params.id
        
        fetch(`http://localhost:3000/users/${friend}`, reqObj)
        .then(res => res.json())
        .then(friendObj => {
            if(friendObj.error) {
                throw(friendObj.error)
            }
        return this.props.getUser(friendObj)
        })
        .catch((error) => {
            this.props.getUser(error)
        })
    }



    clickedChamp = (target) => {
        // console.log('handle click champ', target)
        // console.log('handle click champ id', target.champ_id)
            this.props.history.push(`/champ/${target.champ_id}`)
    }
    
    renderWishCard = () => {
        const { wishes, champs, friend } = this.props
        return !friend ? null : friend.skins.map(wish => {
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
                    <img alt={wish.name} onClick={() => this.clickedChamp(wish)} src={wish.loading_img} className="ui image" />
                </div>
        }
    )}
     
    
    render(){
        console.log(this.props.friend)
        return (
            <div className="ui six cards">
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
        wishes: state.user.wishes,
        friend: state.user.friend
    }
}

const mapDispatchToProps = (dispatch) => {
    // console.log('show page map dispatch to props', dispatch)
    return {
        getChampsSuccess: (champs) => {
            dispatch(getChampsAction(champs))
        },
        getChampsFailure: (error) => {
            dispatch(getChampsFailAction(error))
        },
        getUser: (friend) => {
            dispatch(getUserAction(friend))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FriendShow))