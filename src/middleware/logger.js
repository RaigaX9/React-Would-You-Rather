const logger = (store) => (next) => (action) => {
    console.log("dispatching: ", action);
    const returnValue = next(action);
    console.log("next state: ", store.getState());
    return returnValue
};

export default logger