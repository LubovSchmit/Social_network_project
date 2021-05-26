import {ActionPropsType} from './Store';

let initialState = {
    friends: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Sveta'}
    ]
}

export const sidebarReducer = (state: any = initialState, action: ActionPropsType) => {

    return state
}
