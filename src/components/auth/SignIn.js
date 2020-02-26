import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

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
            .then(cred => {
                // console.log('fetch', cred)
                // debugger
                if(cred.error) {
                    throw(cred.error)
                }
            if (!cred.error) {
                localStorage.setItem("token", cred.jwt)
                this.props.signIn(cred)
                this.props.history.push('/')
            } else {
                alert(cred.error)
                this.props.history.push('/login')
            }
            }
            )
        }


    render() {
        const { authError } = this.props
        return (
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <form onSubmit={this.handleSubmit} className='ui large form'>
                    <div class="ui stacked segment">
                        <h2 className="ui teal image header">
                            <div className="content">
                                Login to your account
                            </div>
                        </h2>
                        <div className='field'>
                            <label htmlFor='username'></label>
                            <input type='text' id='username' placeholder='Username' onChange={this.handleChange}></input>
                        </div>
                        <h5 className=''>Password</h5>
                        <div className='input-field'>
                            <label htmlFor='password'></label>
                            <input type='password' id='password' placeholder='Password' onChange={this.handleChange}></input>
                        </div>
                        <div className='input-field'>
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
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)


{/* <div class="ui middle aligned center aligned grid">
  <div class="column">
    <h2 class="ui teal image header">
      <img src="assets/images/logo.png" class="image">
      <div class="content">
        Log-in to your account
      </div>
    </h2>
    <form class="ui large form">
      <div class="ui stacked segment">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" name="email" placeholder="E-mail address">
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password" placeholder="Password">
          </div>
        </div>
        <div class="ui fluid large teal submit button">Login</div>
      </div>

      <div class="ui error message"></div>

    </form>

    <div class="ui message">
      New to us? <a href="#">Sign Up</a>
    </div>
  </div>
</div> */}
