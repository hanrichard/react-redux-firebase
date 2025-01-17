import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class Signin extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signIn(this.state)
    }


  render() {
      const {authError, auth} = this.props;
      if(auth.uid) return <Redirect to='/' />
    return (
      <div className="container">
        <form className="" onSubmit={this.handleSubmit}>
            <h5>sign in</h5>

            <div className="input-file">
                <label>email</label>
                <input type='email' id="email" onChange={this.handleChange}/>
            </div>
            
            <div className="input-file">
                <label>password</label>
                <input type='password' id="password" onChange={this.handleChange}/>
            </div>


            <div className="input-file">
                <button className="btn pink">sign in</button>

                <div className=""> {
                    authError? <p>{authError}</p>: null
                }</div>
            </div>
        

        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        authError: state.auth.authError, 
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: creds => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)
