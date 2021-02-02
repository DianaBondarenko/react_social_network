import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import React from 'react';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    debugger
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path='/profile' render={() => <Profile store={props.store} />}/>
                <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;