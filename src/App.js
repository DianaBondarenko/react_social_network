import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route} from "react-router-dom";
import React from 'react';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path='/profile' render={() => <Profile store={props.store} />}/>
                <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
                <Route path='/friends' render={() => <FriendsContainer store={props.store}/>}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;