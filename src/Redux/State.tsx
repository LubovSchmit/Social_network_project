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

export type ProfilePageType = {
    posts: Array<PostType>
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


let state: RootStateType = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 11},
            {id: 2, message: 'It is my first post', likesCount: 12}
        ]
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
        ]
    },
    sidebar: {
        friends: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Sveta'}
    ]
    }
}

export default state