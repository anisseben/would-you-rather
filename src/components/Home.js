import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Home extends Component {

  render(){

    return(
      <div>
        {this.props.authedUser === null
              ? null
              :
                <ol>
                  {this.props.questionsIds.map((id)=>(
                    <li key={id}>
                      <Question id={id}/>
                    </li>
                  ))

                  }

                </ol>
              }
      </div>

    )
  }
}

function mapStateToProps({questions, users}){
  return{
    questionsIds:  Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
}
}

export default connect(mapStateToProps)(Home)
