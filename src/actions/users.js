export const get_users_info = "get_users_info";
export const User_Login = "User_Login";

export const getUsers = (users)  =>{
    return {
        type: get_users_info,
        users
    }
};

export const userLogin =  (id) => {
    return {
        type: "User_Login",
        id
    }
};