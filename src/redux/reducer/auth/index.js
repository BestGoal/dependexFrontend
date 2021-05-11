
const preState = {
    isAuth: false
}

const auth = ( state = preState, action) => {
    switch(action.type) {
        case "INCREMENT":
            return state;
        default: 
            return state
    }
}

export default auth;