// feature name
export const PACIENTS = '[Pacients]';

// action types
export const FETCH_PACIENTS = `${PACIENTS} FETCH`;
export const SET_PACIENTS = `${PACIENTS} SET`;

export const setPacients = ({pacients}) => ({
    type: SET_PACIENTS,
    payload: pacients
});

export const fetchPacients = ({query}) => ({
    type: FETCH_PACIENTS,
    payload: query
})