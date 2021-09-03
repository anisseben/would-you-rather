import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


class Navbare extends Component {

  render() {



    return (
      <nav className='nav'>
         <ul>
            <li key={"home"}><NavLink to='/' activeClassName='active'>Home</NavLink></li>
            <li key={"new"}><NavLink to='/new' activeClassName='active'>New Question</NavLink></li>
            <li key={"leader"}><NavLink to='/leader' activeClassName='active'>Leader Board</NavLink></li>
            {this.props.authedUser === null
              ? null
              : <li key={"logout"}>
                  <img
                    src={this.props.avatarURL}
                    alt={`Avatar of ${this.props.name}`}
                    className='nav-avatar'
                  />
                  <div>{`hello,${this.props.name}`}</div>
                  <NavLink to='/log' activeClassName='active'>Logout</NavLink>
                </li>
              }


          </ul>
      </nav>
    )
  }
}

function mapStateToProps ({ authedUser,users,questions }) {
    const user=users[authedUser]
    const userCopy=Object.assign({}, user)
    const {name,avatarURL} = userCopy
    return {
      name,
      avatarURL,
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(Navbare)
