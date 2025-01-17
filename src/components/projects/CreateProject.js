import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createProject(this.state)
        this.props.history.push('/')
        console.log(this.state)
    }


  render() {
    const { auth } = this.props;
    if(!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="container">
        <form className="" onSubmit={this.handleSubmit}>
            <h5>create a project</h5>

            <div className="input-file">
                <label>title</label>
                <input type='text' id="title" onChange={this.handleChange}/>
            </div>
            
            <div className="input-file">
                <label>content</label>
                <textarea className="materialize-textarea" 
                    id="content" 
                    onChange={this.handleChange}/>
            </div>


            <div className="input-file">
                <button className="btn pink">create</button>
            </div>
        

        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
