import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { Link } from 'react-router-dom'

// background image
// http://img2.wikia.nocookie.net/__cb20140803182651/leagueoflegends/images/4/48/Shadow_Isles_concept_4.jpg

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
                        <a href className="item"><SignedOutLinks /></a>  
                        <a href className="item"><SignedInLinks /></a>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar