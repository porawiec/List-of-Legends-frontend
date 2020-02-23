import React from 'react';
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {

    return(
        <ul className='right'>
            {/* will fix navlink routing later */}
            <li><NavLink to='/signup'>Create New Account</NavLink></li>
            <li><NavLink to='/signin'>Sign In</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks