import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



class QuestionPage extends Component {

  render() {
    const {name,avatar,questionOne,questionTwo}=this.props
    return (

      <div className="QuestionPage">
        <h3>{`${name} asks`}</h3>
        <img
        src={avatar}
        alt={`Avatar of ${name}`}
        className='avatar'
        />
        <h2>Would You Rather...</h2>
        <form>
          <input type="radio"  name="questionOne" value="questionOne"/>
          <label for="questionOne">{questionOne}</label><br/>
          <input type="radio"  name="questionTwo" value="questionTwo"/>
          <label for="questionTwo">{questionTwo}</label><br/>
          <button type="submit">Vote</button>
        </form>
      </div>


    )
  }
}

function mapStateToProps ({ authedUser,questions,users },props) {
  const id=props.match.params.id
  const question = questions[id]
  const questionsCopy = Object.assign({}, question);
  const author = questionsCopy.author
  const user= users[author]
  const userCopy = Object.assign({}, user);
  const name = userCopy.name
  const avatar = userCopy.avatarURL
  const questionOne= Object.assign({}, questionsCopy.optionOne).text
  const questionTwo= Object.assign({}, questionsCopy.optionTwo).text

  return {
    authedUser,
    question,
    name,
    avatar,
    questionOne,
    questionTwo
  }
}


export default connect(mapStateToProps)(QuestionPage)
