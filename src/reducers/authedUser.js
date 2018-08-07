import { User_Login } from "../actions/users"


const authedUser = (state = null, action) => {
    if(action.type === User_Login){
        return action.id;
    }
    else{
        return state;
    }
};

export default authedUser