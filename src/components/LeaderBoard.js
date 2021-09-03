import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'



class LeaderBoard extends Component {


  render() {
    return (
      <div>
        {this.props.authedUser === null
              ? null
              :
              <div>
              {this.props.users.map((user)=>(
                  <div>
                  <div className="leaderInfo">
                    <h2>{user.name}</h2>
                    <p key="nbrAnswer">Answered question    {user.nbrAnswer}</p>
                    <p key="nbrQueqtions">Created question     {user.nbrQueqtions}</p>
                  </div>
                  <div className="score">
                    <p key="Score">Score</p>
                    <p key="score">{user.score}</p>
                  </div>
                  </div>

              ))}

              </div>
            }

        </div>

    )
  }
}

function mapStateToProps ({ authedUser,users}) {

  const usersList = Object.values(users)
  const leaders = usersList.map((user)=>{
   const nbrQueqtions= user.questions.length
   const nbrAnswer = Object.values(user.answers).length
   const score = nbrQueqtions+nbrAnswer
   return {
     name:user.name,
     nbrQueqtions:nbrQueqtions,
     nbrAnswer:nbrAnswer,
     score:score
    }
 })
  const sortedUsers = leaders.sort((a,b) => b.score - a.score)
  return {
    authedUser: authedUser,
    users:sortedUsers

  }
}

export default connect(mapStateToProps)(LeaderBoard)
