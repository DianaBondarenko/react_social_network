import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route} from "react-router-dom";
import React from 'react';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path='/profile/:userId?' render={() => <ProfileContainer store={props.store} />}/>
                <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
                <Route path='/friends' render={() => <FriendsContainer store={props.store}/>}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;