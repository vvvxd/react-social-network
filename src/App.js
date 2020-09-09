import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Diologs/Dialogs";
import Profile from "./components/Profil/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Settings/Settings";
import DialogsContainer from "./components/Diologs/DialogsContainer";



const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render={()=><Profile

                           />}
                    />
                    <Route
                        path='/dialogs'
                        render={()=><DialogsContainer

                        />}
                    />
                    <Route path='/news' render={()=><News/>}/>
                    <Route path='/music' render={()=><Music/>}/>
                    <Route path='/setting' render={()=><Setting/>}/>
                </div>
            </div>

    );
};

export default App;
