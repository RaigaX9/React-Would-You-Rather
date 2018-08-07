import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { connect } from "react-redux"
import UserLoggingIn from './components/UserLoggingIn'
import AnsweredQuestions from './components/AnsweredQuestions'
import UnansweredQuestions from './components/UnansweredQuestions'
import Leaderboard from './components/Leaderboard'
import NavigationBar from './components/NavigationBar'
import AddNewQuestion from './components/AddNewQuestion'
import ShowQuestion from './components/ShowQuestion'
import { handleInitialData } from "./actions/shared"
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
      return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Would You Rather</h1>
          </header>
            {!this.props.authedUser && <UserLoggingIn />}
            {this.props.authedUser && <NavigationBar />}

          <Route path='/notanswered' render={() => (this.props.authedUser &&
            <UnansweredQuestions />
          )} />

          <Route path='/answered'  render={() => (this.props.authedUser &&
            <AnsweredQuestions />
          )} />
          <Route path='/question/:id'  render={() => (this.props.authedUser &&
            <ShowQuestion />
          )} />
          <Route path='/leaderboard' render={() => (this.props.authedUser && <Leaderboard />)} />
          <Route path='/add' render={() => (this.props.authedUser && <AddNewQuestion />)} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser: users[authedUser] ? users[authedUser] : null
  }
};

export default connect(mapStateToProps)(App)
