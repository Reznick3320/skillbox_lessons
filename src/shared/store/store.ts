import {ActionCreator, AnyAction, Reducer} from "redux";
import { ME_REQUEST, ME_REQUEST_SUCCESS, ME_REQUEST_ERROR, MeRequestAction, MeRequestSuccessAction, MeRequestErrorAction } from './me/actions';
import { meReducer, TMeState } from "./me/reducer";

export type TRootState = {
    commentText: string;
    token: string;
    me: TMeState
}

const initialState:TRootState = {
    commentText: 'Hello, Reznick!',
    token: '',
    me: {
        loading: false,
        error: '',
        data: {}
    },
}

const UPDATE_COMMENT = 'UPDATE_COMMENT';
type TUpDateCommentAction = {
    type: typeof UPDATE_COMMENT;
    text: string;
}
export const upDateComment: ActionCreator<TUpDateCommentAction> = (text: string) => ({
    type: UPDATE_COMMENT,
    text,
    
});


const SET_TOKEN = 'SET_TOKEN';
type TSetTokenAction = {
    type: typeof SET_TOKEN;
    token: string;
}
export const setTokenAction: ActionCreator<TSetTokenAction> = (token: string) => ({
    type: SET_TOKEN,
    token,
})

type TMyAction = TUpDateCommentAction
    | TSetTokenAction
    | MeRequestAction
    | MeRequestSuccessAction
    | MeRequestErrorAction

export const  rootReducer: Reducer<TRootState, TMyAction> = ((state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.text,
            };
        case SET_TOKEN:
            return {
                ...state,
                token: action.token,
            }
        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_ERROR:
            return {
                ...state,
                me: meReducer(state.me, action)
            }
        default:
            console.log('default');
            return state;
    }
})