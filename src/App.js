import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Settings/Settings";
import DialogsContainer from "./components/Diologs/DialogsContainer";
import UsersContainer from "./components/User/UsersContainer";
import ProfileComponent from './components/Profil/ProfileContainer';



const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route  path='/profile' render={()=><ProfileComponent/>}/>
                    <Route path='/dialogs' render={()=><DialogsContainer/>}/>
                    <Route path='/users' render={()=><UsersContainer/>}/>
                    <Route path='/news' render={()=><News/>}/>
                    <Route path='/music' render={()=><Music/>}/>
                    <Route path='/setting' render={()=><Setting/>}/>
                </div>
            </div>
    );
};

export default App;
