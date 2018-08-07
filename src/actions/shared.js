import {_getUsers, _getQuestions} from '../_DATA.js'
import { getQuestions } from "./questions"
import { getUsers, userLogin } from "./users"

let USR_ID = null;

export const handleInitialData = () => {
    return (dispatch) => {
        return retrieveInfo().then(({ users, questions }) => {
                dispatch(getUsers(users));
                dispatch(getQuestions(questions));
                dispatch(userLogin(USR_ID));
            })
    }
};

export const retrieveInfo = () => {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        questions,
    }))
};

