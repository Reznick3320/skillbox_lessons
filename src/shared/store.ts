import {ActionCreator, AnyAction, Reducer} from "redux";

export type TRootState = {
    commentText: string;
    token: string;
}

const initialState:TRootState = {
    commentText: 'Hello, Reznick!',
    token: '',
}

const UPDATE_COMMENT = 'UPDATE_COMMENT';
const SET_TOKEN = 'SET_TOKEN';

export const upDateComment: ActionCreator<AnyAction> = (text) => ({
    type: UPDATE_COMMENT,
    text,
});

export const setToken: ActionCreator<AnyAction> = (token) => ({
    type: SET_TOKEN,
    token: token,
})

export const  rootReducer: Reducer<TRootState> = ((state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.text,
            };
        case SET_TOKEN:
            console.log('case SET_TOKEN')
            return {
                ...state,
                token: action.token,
            }
        default:
            console.log('default');
            return state;
    }
})