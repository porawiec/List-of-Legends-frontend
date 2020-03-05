import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('state',this.state)
        console.log('props',this.props)

        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({user: this.state})
        }
    
        fetch('http://localhost:3000/users', reqObj)
            .then(res => res.json())
            .then(cred => {
                if(cred.error) {
                    throw(cred.error)
                }
            if (!cred.error) {
                this.props.signUp(cred)
                this.props.history.push('/login')
            } else {
                alert(cred.error)
                this.props.history.push('/signup')
            }
            }
            )
        }


    render() {
        return (
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                <div class="ui hidden divider"></div>

                    <form onSubmit={this.handleSubmit} className='ui large form'>
                    <div class="ui raised very padded text container segment">
                        
                        <h2 class="ui teal header">
                                <div className="content">
                                    Create new account
                                </div>
                            </h2>

                            <div className='field'>
                                <label htmlFor='username'></label>
                                <input type='text' id='username' placeholder='Username' onChange={this.handleChange}></input>
                            </div>

                            <div className='field'>
                                <label htmlFor='password'></label>
                                <input type='password' id='password' placeholder='Password' onChange={this.handleChange}></input>
                            </div>

                            <div class="ui hidden divider"></div>

                            <div className='input-field'>
                                <button className='ui large teal submit button'>Sign Up</button>
                            </div>
                            </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (creds) => dispatch(signUp(creds))
    }
}

export default connect(null, mapDispatchToProps)(SignUp)
