import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getWishesAction } from '../../store/actions/userActions'
import { getWishesFailAction } from '../../store/actions/userActions'


class Wishlist extends Component {

    componentDidMount() {
        // const reqObj = {
        //     method: 'GET',
        //     headers: {
        //         Authorization: `Bearer ${localStorage.getItem('token')}`,
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     }
        //     }
        // fetch('http://localhost:3000/profile', reqObj)
        // .then(res => res.json())
        // .then(res => {
        //     if(res.error) {
        //         throw(res.error)
        //     }
        //     // console.log('fetch wishlist', res.user)
        //     this.props.getWishesSuccess(res.user.skins)
        // })
        // .catch((err) => {
        //     this.props.getWishesFailure(err)
        // })
    // console.log('wish component did mount props--------->', this.props)
    // this.props.getWishes(this.props.currentUser)
}

clickedChamp = (target) => {
    // console.log('handle click champ', target)
        // console.log('handle click champ id', target.champ_id)
        this.props.history.push(`/champ/${target.champ_id}`)
    }
    
    
    render(){
        console.log('wishlist props', this.props)
        const { wishes } = this.props

        const divStyle={
            overflowY: 'scroll',
            // border:'1px solid red',
            // width:'500px',
            // float: 'left',
            height:'450px',
            position:'relative'
          };
        
    return (

    <div style= {divStyle} className="ui four cards">
        {!wishes ? null : wishes.map(wish => (
            <div className="ui raised card" >
              
                    <h4 className="ui center aligned">{wish.name === 'default' ? "Champion" : wish.name}</h4>
                    {/* //get the name of champion from champion id */}
                
                    <img onClick={() => this.clickedChamp(wish)} src={wish.loading_img} className="ui small image" />
               
            </div>
        ))}
    </div>
    )
    }
}

const mapStateToProps = (state) => {
    console.log('wishlist map state to props', state)
    // let id = ownProps.match.params.champ_id
    
    return {
        currentUser: state.auth.currentUser,
        wishes: state.user.wishes
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
        },
        getWishes: (user) => dispatch(getWishesAction(user))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Wishlist))