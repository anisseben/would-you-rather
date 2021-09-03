import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



class Question extends Component {

  render() {
    const {id}=this.props
    return (
      <div className="homeQuestions">
        <img
          src={this.props.avatar}
          alt={`Avatar of ${this.props.name}`}
          className='avatar'
        />
        <div>
        <h5>{`${this.props.name} asks`}</h5>
        <p>Would you Rather</p>
        </div>
        <Link to={`/question/${id}`} activeClassName='active' className="viewPoll">View Poll</Link>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser,questions,users },{id}) {
  const question = questions[id]
  const name= users[authedUser].name
  const avatar = users[question.author].avatarURL
  const user=users[question.author]

  return {
    authedUser,
    avatar:avatar,
    name:name,
    users:users,
    question: question,
    user:user,
    id:id

  }
}

export default connect(mapStateToProps)(Question)
