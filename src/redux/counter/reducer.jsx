import { INCREASE, DECREASE } from "./constants";

export const initState = 0

const countReducer = (state = initState, action) => {
    switch (action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
};
export default countReducer;