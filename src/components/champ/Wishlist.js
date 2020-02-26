import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getWishesAction } from '../../store/actions/wishActions'
import { getWishesFailAction } from '../../store/actions/wishActions'


class Wishlist extends Component {

    componentDidMount() {
        const reqObj = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
            }
        fetch('http://localhost:3000/champs', reqObj)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error)
            }
            console.log(res)
            this.props.getWishesSuccess(res)
        })
        .catch((err) => {
            this.props.getWishesFailure(err)
        })
    }

    clickedChamp = (target) => {
        console.log('handle click champ', target)
        console.log('handle click champ id', target.champ_id)
        this.props.history.push(`/champ/${target.champ_id}`)
    }
    
    render(){
        console.log('wishlist props', this.props)
        const { wishes } = this.props
        
    return (

    <div className="ui four cards">
        {wishes.map(wish => (
            <div className="ui raised card" >
            {/* style="overflow-y:auto;white-space:nowrap;" */}
              
                    <h4 className="ui center aligned">{wish.name === 'default' ? "Champion" : wish.name}</h4>
                
                    <img onClick={() => this.clickedChamp(wish)} src={wish.loading_img} className="ui small image" />
               
            </div>
        ))}
    </div>
    )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('wishlist map ownProps to props', ownProps)
    // let id = ownProps.match.params.champ_id
    
    return {
        // champ: state.wish.champs.find((champ) => champ.id === id),
        // skins: state.wish.skins,
        wishes: state.wish.wishes
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('wishlist map dispatch to props', dispatch)
    return {
        getWishesSuccess: (champs) => {
            dispatch(getWishesAction(champs))
        },
        getWishesFailure: (error) => {
            dispatch(getWishesFailAction(error))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Wishlist))