import {ActionPropsType, PostType, RootStateType} from './Store';


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState =
    {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 11},
            {id: 2, message: 'It is my first post', likesCount: 12}
        ],
        newPostText: ''
    }


export const profileReducer = (state: any = initialState, action: ActionPropsType) => {
    switch (action.type) {
        case 'ADD_POST':
            let newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = '';
            return state;
        case 'UPDATE_NEW_POST_TEXT':
            state.newPostText = action.newText
            return state;

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});