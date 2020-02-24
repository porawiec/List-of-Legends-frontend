import React from 'react';
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {

    return(
        <div>
            {/* will fix navlink routing later */}
            <NavLink to='/signup'>Create New Account</NavLink> //{' '}
            <NavLink to='/signin'>Sign In</NavLink>
        </div>
    )
}

export default SignedOutLinks