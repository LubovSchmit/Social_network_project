import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../Redux/dialogs-reducer';
import {DialogPageType} from '../../Redux/Store';


type DialogsPropsType = {
    dialogsPage: DialogPageType
    state: any
    store:any
}



export function Dialogs(props: DialogsPropsType) {
    let state = props.store.getState().dialogsPage;

    let dialogsElements = props.state.dialogs.map((d: { name: string; id: number; }) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map((m: { message: string; id: number; }) => <Message message={m.message} id={m.id}/>)
    let newMessageBody = props.state.newMessageBody;

    let onSendMessageClick = (e: any) => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e: any) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>


            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'>
                    </textarea></div>
                    <div>
                        <button className={s.buttonAddPost} onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

