import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';

export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type FriendType = {
    id: number
    name: string
}
export type PostMessagePropsType = {
    postMessage: string
}
export type NewPostTextPropsType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type SidebarType = {
    friends: Array<FriendType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}
export type AddPostPropsType = {
    addPost: (postMessage: string) => void
}
export type UpdateNewPostTextPropsType = {
    updateNewPostText: (newText: string) => void
}
export type SubscribePropsType = {
    observer: () => void
}
export type CallSubscriberPropsType = {
    _state: RootStateType

}

export type ActionPropsType = {
    type: string
    newText: string
    body: string
}

export type DispatchPropsType = {
    action: ActionPropsType

}


export const store = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 11},
                {id: 2, message: 'It is my first post', likesCount: 12}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Andrew'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Sveta'}
            ]
        }
    },
    _callSubscriber(any: any) {
        console.log('state changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer: any) {
        this._callSubscriber = observer//паттерн-observer
    },
    dispatch(action: ActionPropsType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}





// @ts-ignore
window.store = store








