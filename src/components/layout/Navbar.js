import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { Link } from 'react-router-dom'

// background image
// http://img2.wikia.nocookie.net/__cb20140803182651/leagueoflegends/images/4/48/Shadow_Isles_concept_4.jpg

const Navbar = () => {
    
        return(
            <nav>
                <div class="ui inverted menu">
                <Link to='/'>
                    <div class="item"><img src='https://b.thumbs.redditmedia.com/MDQjKWvNW82SfYXHbA9eFY1O-AFyT-4tpqWOWl3Xo-s.png' />
                        List of Legends
                    </div>
                </Link>
                    <div class="right menu">
                        <a href class="item"><SignedOutLinks /></a>  
                        <a href class="item"><SignedInLinks /></a>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar