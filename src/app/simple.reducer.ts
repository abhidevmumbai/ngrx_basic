import { Action } from '@ngrx/store';

export function simpleReducer(state: String, action: Action) {
    switch (action.type) {
        case 'Spanish':
            return state = 'Hola Mundo';
        case 'French':
            return state = 'Bonjour la monde';
        default:
        return state;
    }
}
