import React from 'react';
import {DispatchPropsType, store} from './Redux/Store'
import ReactDOM from 'react-dom';
import App from './App';
import {RootStateType} from './Redux/Store';
import {BrowserRouter} from 'react-router-dom';

export type AppPropsType = {
    state: RootStateType
    dispatch: DispatchPropsType
    store: any
    getState: () => void
}

let rerenderEntireTree = (props: any) => {


    ReactDOM.render(
        <BrowserRouter>
            <App
                state={props.state}
                dispatch={props.store.dispatch.bind(store)}
                store={props.store}
                updateNewPostText={props.store.dispatch.bind(store)}
                newPostText={props.store.dispatch.bind(store)}

            />
        </BrowserRouter>,
        document.getElementById('root')
    )
    ;
}

rerenderEntireTree(store.getState());


store.subscribe( (props: any) => {

    let state = store.getState();

    rerenderEntireTree(state)
});



