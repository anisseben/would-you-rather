import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {handleAddQuestion} from '../actions/questions'


class NewQuestion extends Component {

  state={
    qu1:"",
    qu2:""
  }

  handleSubmit = event=>{
    const qu1=event.target.qu1.value
    console.log(qu1)
    const qu2=event.target.qu2.value
    this.props.dispatch(handleAddQuestion(qu1,qu2))
    this.props.history.push('/')
  }

  handleChange= event=>{
    const {name,value}=event.target
    this.setState(currState => ({
      ...currState,
      [name]: value
    }));
  }
  render() {
    return (
      <div>
        {this.props.authedUser === null
              ? null
              :
                 <fieldset>
                   <h1>Create New Question</h1>
                   <p> Complete question</p>
                   <h3>would you Rather ...</h3>
                   <form onSubmit={this.handleSubmit}>
                      <input
                          value={this.state.qu1}
                          onChange={this.handleChange}
                          name="qu1"
                          placeholder="Enter Question One here.."
                      />
                      <h3>OR</h3>
                      <input
                          value={this.state.qu2}
                          onChange={this.handleChange}
                          name="qu2"
                          placeholder="Enter Question Two here.."
                        />
                      <button className='btn'
                        type='submit'
                        disabled={this.state.qu1 ===""|| this.state.qu2 ===""}>Submit
                      </button>
                   </form>
                 </fieldset>
              }
      </div>


    )
  }
}

function mapStateToProps ({ authedUser}) {
  return {
    authedUser: authedUser,
  }
}

export default connect(mapStateToProps)(NewQuestion)
