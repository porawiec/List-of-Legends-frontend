import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getChampsAction } from '../../store/actions/wishActions'
import { getChampsFailAction } from '../../store/actions/wishActions'

class ChampSelect extends Component {

    componentDidMount() {
        fetch('http://localhost:3000/champs')
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

    clickedChamp = (target) => {
        console.log('handle click champ', target)
        console.log('handle click champ id', target.id)
        this.props.history.push(`/champ/${target.id}`)
    }

    
    render(){
        console.log('champ select props', this.props)
        const { champs } = this.props
        return(
        <div className="ui grid">
            {champs.map(champ => (
                <div className="column">
                    <img onClick={() => this.clickedChamp(champ)} src={champ.icon_img} className="ui image" />
                </div>
            ))}
        </div>
        )}
    }

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ChampSelect))