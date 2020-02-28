import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Wishlist extends Component {

clickedChamp = (target) => {
    // console.log('handle click champ', target)
        // console.log('handle click champ id', target.champ_id)
        this.props.history.push(`/champ/${target.champ_id}`)
    }
        
    render(){
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
        // this.checkUser()
    <div style= {divStyle} className="ui four cards">
        {!wishes ? null : wishes.map(wish => (
            <div className="ui raised card" >
              
                    <h4 className="ui center aligned">{wish.name === 'default' ? "Champion" : wish.name}</h4>
                    {/* //get the name of champion from champion id */}
                
                    <img alt={wish.name} onClick={() => this.clickedChamp(wish)} src={wish.loading_img} className="ui small image" />
               
            </div>
        ))}
    </div>
    )
    }
}

const mapStateToProps = (state) => {
    // console.log('wishlist map state to props', state)
    // let id = ownProps.match.params.champ_id
    
    return {
        currentUser: state.auth.currentUser,
        wishes: state.user.wishes
    }
}

export default connect(mapStateToProps)(withRouter(Wishlist))