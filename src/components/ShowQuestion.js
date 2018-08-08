import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleAnswerQuestion } from '../actions/questions'

const mapStateToProps = ({ authedUser, questions, users }, props) => {
    const {id} = props.match.params;

    return {
        id,
        users,
        questions,
        authedUser,
        dispatch: props.dispatch
    }
};
class ShowQuestion extends Component {

    state = {
        redirecthome: false
    };

    onClickEvent = (id, option, authedUser) => {
        this.props.dispatch(handleAnswerQuestion(id, option, authedUser));

        this.setState(() => {
            return { redirecthome: true }
        })
    };

    render() {
        const { onClickEvent } = this;
        const { authedUser, questions, id, users } = this.props;
        let author = users[questions[id].author];
        if (questions[id].optionOne.votes.includes(authedUser) || questions[id].optionTwo.votes.includes(authedUser)) {

            let opvote1 = questions[id].optionOne.votes.length;
            let opvote2 = questions[id].optionTwo.votes.length;
            let calcpercentage1 = Math.ceil(Math.round(opvote1 / (opvote1 + opvote2) * 100));
            let calcpercentage2 = Math.ceil(Math.round(opvote2 / (opvote1 + opvote2) * 100));

            return (
                <div>
                    <div>
                        <span>Created By:</span>
                        <div>{author.name}</div>
                        <div><img alt='avatar' className='avatar' src={author.avatarURL} /></div>
                    </div>
                    <hr/>
                    <div>
                        {questions[id].optionOne.text}
                        {questions[id].optionOne.votes.includes(authedUser)}
                        <div>
                            <span className="bold_txt"> Numbers who voted:</span> {opvote1}
                        </div>
                        <div>
                            <span className="bold_txt">Vote Percentage:</span> {calcpercentage1}%
                        </div>
                    </div>
                    <div>or</div>
                    <div>
                        {questions[id].optionTwo.text}
                        {questions[id].optionTwo.votes.includes(authedUser)}
                        <div>
                            <span className="bold_txt">Numbers who voted:</span> {opvote2}
                        </div>
                        <div>
                            <span className="bold_txt">Vote Percentage:</span> {calcpercentage2}%
                        </div>
                    </div>
                    <hr/>
                </div>

            )
        }
        return (
            <div>
                <div>
                    <span>Created By:</span>
                    <div>{author.name}</div>
                    <div><img alt='avatar' className='avatar' src={author.avatarURL} /></div>

                </div>
                <br/>
                <span className="bold_txt">Would You Rather...</span>
                <hr/>
                <a className="answerselect" onClick={() => onClickEvent(id, 'optionOne', authedUser)}>
                    {questions[id].optionOne.text}
                </a>
                <br/>
                <br/>
                <div>or</div>
                <br/>
                <a className="answerselect" onClick={() => onClickEvent(id, 'optionTwo', authedUser)}>
                    {questions[id].optionTwo.text}
                </a>
                <hr/>
            </div>

        )
    }
}

export default withRouter(connect(mapStateToProps)(ShowQuestion))