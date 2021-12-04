import * as actionType from "./actionTypes";

const InitialState = {
    value: 0
}

export const countReducer = (state=InitialState, action) => {
    const {type, payload} = action;
    switch(type){
        case actionType.INCREMENT:
            return {...state, value: state.value+1};
        case actionType.DECREMENT:
            return {...state, value: state.value-1};
        default:
            return state;
    }
}

export const nameReducer = (state = {name: ""}, action) => {
    switch(action.type) {
        case actionType.CHANGE_NAME:
            return {...state, name: action.payload};
        default:
            return state;
    }
}
