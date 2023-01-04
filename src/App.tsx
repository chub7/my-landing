import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {Projects} from "./Projects/Projects";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";
import {Navigate, Route, Routes} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/*' element={<Navigate to={'/main'}/>}/>
                <Route path='/main' element={<Main/>}/>
                <Route path='/skills' element={<Skills/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/contact' element={<Contacts/>}/>
            </Routes>
            <Footer />

        </div>
    );
}

export default App;
