import {ActionPropsType, PostType} from './Store';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: 'Mira'},
        {id: 2, name: 'Luba'},
        {id: 3, name: 'Pierre'},
        {id: 4, name: 'Leon'},
        {id: 5, name: 'Nastya'},
        {id: 6, name: 'Dimych'}
    ],
    messages: [
        {id: 1, message: 'Hello how r u'},
        {id: 2, message: 'WTF'},
        {id: 3, message: 'Whatzaaaaaa'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Hi'}
    ],
    newMessageBody: ''
}


export const dialogsReducer = (state: any = initialState, action: ActionPropsType) => {
    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_BODY':
            state.newMessageBody = action.body;
            return state;
        case 'SEND_MESSAGE':
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;

        default:
            return state

    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body: string) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});


