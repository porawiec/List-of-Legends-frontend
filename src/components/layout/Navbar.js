import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'


// background image
// http://img2.wikia.nocookie.net/__cb20140803182651/leagueoflegends/images/4/48/Shadow_Isles_concept_4.jpg

const handleClick = () => {
    localStorage.removeItem('token')
    this.props.signOut()
}

const Navbar = () => {
    
        return(
            <nav>
                <div className="ui inverted menu">
                <Link to='/'>
                    <div className="item"><img src='https://b.thumbs.redditmedia.com/MDQjKWvNW82SfYXHbA9eFY1O-AFyT-4tpqWOWl3Xo-s.png' />
                        List of Legends
                    </div>
                </Link>
                    <div className="right menu">
                        <NavLink to='/login' className='item'>Sign In</NavLink>
                        <NavLink to='/signup' className='item'>Create New Account</NavLink>
                        {/* {this.props.currentUser.username ?  */}
                        <Link to='/login' className='item' onClick={handleClick}>Log Out</Link> 
                        {/* : null } */}
                    </div>
                </div>
            </nav>
    )
}

const mapStateToProps = state => ({
    currentUser: state.auth.currentUser
})

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)