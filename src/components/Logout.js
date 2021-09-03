import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {toggleUser} from '../actions/authedUser'
import { Link, withRouter } from 'react-router-dom'


class Logout extends Component {

  handleSubmit=(event)=>{
    event.preventDefault()
    const select = event.target.select.value
    this.props.dispatch(toggleUser(select))
    this.props.history.push('/')

  }

  render() {
    this.props.dispatch(toggleUser(null))
    return (
      <div className='SingIn'>
        <div className='welcome'>
          <h3>Welcome To Would you rather World</h3>
          <p>pleas sing in to continue</p>
        </div>
        <div className='Users'>
        <form onSubmit={this.handleSubmit}>
         <select name="select">
            <option key="search" disabled default>Search...</option>
            {this.props.users.map((user)=><option key ={user} value={ user} >{user}</option>)}
          </select>
          <button>sing in </button>
          </form>

        </div>
      </div>

    )
  }
}

function mapStateToProps ({ users }) {
  return {
    users: Object.keys(users)

  }
}

export default connect(mapStateToProps)(Logout)
