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
        console.log(this.state)

        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(this.state)
        }
    
        fetch('http://localhost:3000/auth', reqObj)
            .then(res => res.json())
            .then(cred => {
                if(cred.error) {
                    throw(cred.error)
                }
            if (!cred.error) {
                this.props.signUp(cred)
                this.props.history.push('/')
            } else {
                alert(cred.error)
                this.props.history.push('/signup')
            }
            }
            )
        }


    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className='grey-text text-darken-3'>Create New Account</h5>
                    <div className='input-field'>
                        <label htmlFor='username'>Username</label>
                        <input type='text' id='username' onChange={this.handleChange}></input>
                    </div>
                    <h5 className='grey-text text-darken-3'>Password</h5>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' onChange={this.handleChange}></input>
                    </div>
                    <div className='input-field'>
                        <button className='btn cyan lighten-1'>Sign Up</button>
                    </div>
                </form>
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
