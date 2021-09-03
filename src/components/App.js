import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Navbare from './Navbare'
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Question from './Question'
import Logout from './Logout'
import QuestionPage from './QuestionPage'
import {toggleUser} from '../actions/authedUser'



class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }


  render() {

    return (
      <div >
      <Router>
      <Fragment>
        <LoadingBar />
        <div className='container'>
          <Navbare user={this.props.user} />
          {this.props.loading === true
        ? null
            : <div>
              <Route path='/' exact component={Home} />
              <Route path='/new' exact component={NewQuestion} />
              <Route path='/log' exact component={Logout} />
              <Route path='/leader' exact component={LeaderBoard} />
              <Route path='/question/:id' exact component={QuestionPage} />
              </div>}

        </div>
      </Fragment>
    </Router>
      </div>
    )
  }
}



function mapStateToProps ({ authedUser,users}) {
  return {
    authedUser,
    user:users[authedUser],
    loading: users === null
  }
}
export default connect(mapStateToProps)(App)
