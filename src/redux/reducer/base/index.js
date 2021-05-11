import { IS_LOADING } from "../../type"

const preState = {
    loading: false
}

const base = ( state = preState, action) => {
    switch(action.type) {
        case IS_LOADING:
            return { ...state, loading: action.payload };
        default: 
            return state
    }
}

export default base;