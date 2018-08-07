import {   add_question, answer_question, get_Questions} from "../actions/questions.js"


const questions = (state = {}, action) => {
    if(action.type === get_Questions){
        return {...state, ...action.questions}
    }
    else if (action.type === add_question){
        return {
            ...state,
            [action.question.id]: action.question,
        };
    }
    else if (action.type === answer_question) {
        return {
            ...state,
            [action.qid]: {
                ...state[action.qid],
                [action.answer]: {
                    ...state[action.qid][action.answer],
                    votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                }
            }
        }
    }
    else {
        return state;
    }
};


export default questions