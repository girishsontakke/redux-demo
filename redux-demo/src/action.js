import * as actionType from "./actionTypes";

export const increment = () => {
    return {
        type: actionType.INCREMENT
    }
}

export const decrement = () => {
    return {
        type : actionType.DECREMENT
    }
}