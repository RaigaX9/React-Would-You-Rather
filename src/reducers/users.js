import { get_users_info } from "../actions/users.js"
import { answer_question } from "../actions/questions.js"

const users = (state = {}, action) => {
    if(action.type === get_users_info){
        return {
            ...state,
            ...action.users
        }
    }
    else if(action.type === answer_question){
        return {
            ...state,
            [action.authedUser]: {
                ...state[action.authedUser],
                answers: {
                    ...state[action.authedUser].answers,
                    [action.qid]: action.answer
                }
            }
        }
    }
    else{
        return state;
    }
};

export default users