import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getChampsAction } from '../../store/actions/wishActions'
import { getChampsFailAction } from '../../store/actions/wishActions'



class ChampDetails extends Component {

    componentDidMount() {
        fetch(`http://localhost:3000/champs`)
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
    
    toggleWishStatus = () => {
        console.log("hello")
        this.setState( prevState => {
            return {
                wish: !prevState.wish
            }
        })
    }
    render(){
        const { champs } = this.props
        const id = this.props.match.params.id

        console.log('params', this.props.match.params)
        console.log('champ props', champs)
        const selectedChamp = champs.find(champ => champ.id === parseInt(id));
        console.log('champ id', !selectedChamp ? null : selectedChamp.skins)

        
    return (
    <div class="ui three column grid">
        {!selectedChamp ? null : selectedChamp.skins.map(champ => (
            <div class= "ui column">
                <div class="row">
                    <h2>{champ.name === 'default' ? "Champion" : champ.name}</h2>
                </div>
                <div class ="row">
                    <img src={champ.splash_img} class="ui huge image" />
                    {/* <button class="ui button fluid" onClick={this.toggleWishStatus}>{this.state.wish ? 'Remove from Wishlist' : 'Add to Wishlist!'}</button> */}
                    <button onClick={this.toggleWishStatus}>Add to Wishlist</button>
                </div>
            </div>
        ))}
    </div>
    )
    }}
// }

const mapStateToProps = (state) => {
    console.log('dash map state to props', state)
    return {
        champs: state.wish.champs
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('dash map state to props', dispatch)
    return {
        getChampsSuccess: (champs) => {
            dispatch(getChampsAction(champs))
        },
        getChampsFailure: (error) => {
            dispatch(getChampsFailAction(error))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ChampDetails))