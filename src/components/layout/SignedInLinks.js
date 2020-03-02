import React from 'react';
// import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {

    return(
        <div>
            {/* <li><NavLink to='/create'>Create New Wish</NavLink></li> */}
            <a href onClick={props.signOut}>Log Out</a>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)