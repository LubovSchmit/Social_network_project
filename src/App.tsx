import React from 'react';
import s from './App.module.css';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import {Route} from 'react-router-dom';
import {RootStateType} from './Redux/State';
import Navbar from './Components/Navbar/Navbar';

type AppPropsType = {
    state: RootStateType
}


function App(props: AppPropsType) {
    return (
            <div className={s.appwrapper}>
                <Header/>
                <Navbar sidebar={props.state.sidebar.friends}/>

                <div className={s.appwrappercontent}>
                    {/*<Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>*/}
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                    <Route path='/profile'
                           render={() => <Profile profilePage={props.state.profilePage}/>}/>
                </div>
            </div>


    );
}


export default App;
