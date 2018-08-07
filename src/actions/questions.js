import {_saveQuestion, _saveQuestionAnswer} from "../_DATA";

export const get_Questions = 'get_Questions';
export const answer_question = 'answer_question';
export const add_question = 'add_question';

export function getQuestions(questions) {
    return {
        type: get_Questions,
        questions
    }
}

const addQuestion = (question) => {
    return {
        type: add_question,
        question
    }
};

const answerQuestion = ({ authedUser, qid, answer }) => {
    return {
        type: answer_question,
        qid,
        authedUser,
        answer
    }
};

export const handleSavedQuestions = ({ optionOneText, optionTwoText }) => {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        return _saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
            .then((question) => dispatch(addQuestion(question)))
    }
};



export const handleAnswerQuestion = (qid, answer, authedUser) => {

    return (dispatch) => {
        return _saveQuestionAnswer({ authedUser, qid, answer })
            .then((question) => dispatch(answerQuestion({ authedUser, qid, answer })))
    }
};