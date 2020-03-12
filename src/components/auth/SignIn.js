import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { getFriendsAction } from '../../store/actions/userActions'
// import Background from '../../images/Shadow_Isles_concept_4.jpg'

class SignIn extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        // console.log(e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state)

        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(this.state)
        }
    
        fetch('http://localhost:3000/login', reqObj)
            .then(res => res.json())
            .then(userObj => {
                // console.log('fetch', userObj)
                // debugger
                if(userObj.error) {
                    throw(userObj.error)
                }
            if (!userObj.error) {
                // console.log('login userobj ----------->', userObj)
                localStorage.setItem("token", userObj.jwt)
                this.props.signIn(userObj.user)
                this.props.getFriends(userObj.user)
                this.props.history.push('/')
            } else {
                alert(userObj.error)
                this.props.history.push('/login')
            }
            }
            )
        }


    render() {

        // const divStyle={
        //     // overflowY: 'scroll',
        //     // border:'1px solid red',
        //     // width:'500px',
        //     // float: 'none',
        //     height:'100%',
        //     position:'absolute',
        //     width: "100%",
        //     backgroundImage: `url(${Background})`

        // };

        const { authError } = this.props
        return (
            <div className="ui middle aligned center aligned grid">
                
                <div className="column">
                <div class="ui hidden divider"></div>

                    <form onSubmit={this.handleSubmit} className='ui form'>
                    <div class="ui raised very padded text container segment">
                        
                        <h2 class="ui teal header">Login to your account</h2>

                        <div className='field'>
                            <label htmlFor='username'></label>
                            <input type='text' id='username' placeholder='Username' onChange={this.handleChange}></input>
                        </div>
                        <div className='field'>
                            <label htmlFor='password'></label>
                            <input type='password' id='password' placeholder='Password' onChange={this.handleChange}></input>
                        </div>
                        <div className='input-field'>
                        <div class="ui hidden divider"></div>

                            <button className='ui large teal submit button'>Login</button>
                            <div className=''>
                                { authError ? <p>{authError}</p> : null }
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (user) => {
            dispatch(signIn(user))
        },
        getFriends: (user) => {
            dispatch(getFriendsAction(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)