import React from 'react';
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {

    return(
        <div>
            <NavLink to='/signup'>Create New Account</NavLink> //{' '}
            <NavLink to='/login'>Sign In</NavLink>
        </div>
    )
}

export default SignedOutLinks