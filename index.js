import redux from "redux";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const { createStore, combineReducers } = redux;

const initialState = {
    value : 0
}

const countReducer = (state=initialState, action) => {
    const {type, payload} = action;
    switch(type){
        case INCREMENT:
            return {...state, value: state.value+1};
        case DECREMENT:
            return {...state, value: state.value-1};
        default:
            return state;

    }
}
const nameReducer = (state={name: ""}, action) => {
    switch(action.type){
        case INCREMENT:
            return {...state, name: action.payload};
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    count: countReducer,
    name: nameReducer
})
const store = createStore(rootReducer);
const {dispatch} = store;


///// ACTION
export const incrementCount = (data) => {
    return {
        type : INCREMENT,
        payload : data
    }
}
dispatch(incrementCount(2));
console.log(store.getState())
/* 
action - {
    type, 
    payload
}
store - {
    dispatch,
    getState,
}
let count = 1;
increment -> count++;
decrement -> count--;

state = {
    count : 0,
    name: "girish"
}
{...state, state.count+1};
{count: 1, name: "girish"}
*/
