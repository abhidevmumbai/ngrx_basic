import { Post } from '../models/post.model';
import * as PostActions from '../actions/post.actions';
import { State } from '../../../node_modules/@ngrx/store';

export type Action = PostActions.All;

const defaultState: Post = {
    text: 'Hello, I am the default post',
    likes: 0
};

const newState = (state, newData) => {
    return Object.assign({}, state, newData);
};

export function postReducer(state: Post = defaultState, action) {
    switch (action.type) {
        case PostActions.EDIT_TEXT:
            return newState(state, { text: action.payload });
        case PostActions.UPVOTE:
            return newState(state, { likes: state.likes + 1 });
        case PostActions.DOWNVOTE:
            return newState(state, { likes: state.likes > 0 ? state.likes - 1 : 0 });
        case PostActions.RESET:
            return defaultState;
        default:
            return state;
    }
}
