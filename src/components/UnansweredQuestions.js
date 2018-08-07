import React, { Fragment, Component } from 'react'
import { connect } from "react-redux"
import { Redirect } from 'react-router-dom'

const mapStateToProps = ({ authedUser, questions }) => {

    return {
        questions,
        questionListFiltered: Object.keys(questions).filter(x => {
            let usrchoice = !questions[x].optionOne.votes.includes(authedUser)
                && !questions[x].optionTwo.votes.includes(authedUser);
            return (usrchoice)
        })
    }
};
class UnansweredQuestionList extends Component {

    state = {
        redirect: null
    };

    onClickEvent = (x) => {
        this.setState(() => {
            return { redirect: x }
        })
    };

    render() {
        const { questions, questionListFiltered } = this.props;

        return this.state.redirect
            ? <Redirect to={`/question/${this.state.redirect}`} />
            : <Fragment>
                <h2>Unanswered Questions</h2>
                        {questionListFiltered
                            .map(qa => {
                                return (

                                    <div key={qa} onClick={() => this.onClickEvent(qa)}>
                                        <hr/>
                                        <p>{questions[qa].optionOne.text}</p>
                                        <p> or </p>
                                        <p>{questions[qa].optionTwo.text}</p>
                                        <hr/>
                                    </div>

                                )
                            })}
            </Fragment>

    }
}

export default connect(mapStateToProps)(UnansweredQuestionList)