import React, { Component, Fragment} from 'react'
import { connect } from "react-redux"
import { Redirect } from 'react-router-dom'


const mapStateToProps = ({ authedUser, questions }) => {

    return {
        questions,
        questionListFiltered: Object.keys(questions).filter(x => {
            let usranschoice = questions[x].optionOne.votes.includes(authedUser) ||
                questions[x].optionTwo.votes.includes(authedUser);
            return (usranschoice)
        })
    }
};
class AnsweredQuestionList extends Component{

    state = {
        redirect: null
    };

    onClickEvent = (q) => {
        this.setState(() => {
            return { redirect: q }
        })
    };

    render() {
        const { questions, questionListFiltered } = this.props;

        return this.state.redirect ? <Redirect to={`/question/${this.state.redirect}`} /> : <Fragment>
                <h2>Answered Questions</h2>
                        {questionListFiltered.map(qa => {
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

export default connect(mapStateToProps)(AnsweredQuestionList)