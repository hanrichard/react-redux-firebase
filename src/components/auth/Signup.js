import React, { Component } from 'react'

class Signup extends Component {
    state = {
        email: '',
        password: '',
        fistname: '',
        lastname: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }


  render() {
    return (
      <div className="container">
        <form className="" onSubmit={this.handleSubmit}>
            <h5>sign up</h5>

            <div className="input-file">
                <label>email</label>
                <input type='email' id="email" onChange={this.handleChange}/>
            </div>
            
            <div className="input-file">
                <label>password</label>
                <input type='password' id="password" onChange={this.handleChange}/>
            </div>


            
            <div className="input-file">
                <label>first name</label>
                <input type='text' id="fistname" onChange={this.handleChange}/>
            </div>



            
            <div className="input-file">
                <label>last name</label>
                <input type='text' id="lastname" onChange={this.handleChange}/>
            </div>



            <div className="input-file">
                <button className="btn pink">sign up</button>
            </div>
        

        </form>
      </div>
    )
  }
}

export default Signup
