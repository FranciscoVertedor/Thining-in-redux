import {SET_PACIENTS} from "../actions/pacients.actions";

const initState = [];

export const pacientsReducer = (pacients = initState, action) => {
    switch (action.type) {
        case SET_PACIENTS:
            return action.payload;
        default:
            return pacients;
    }
};