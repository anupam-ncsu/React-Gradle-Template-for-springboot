import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css'

import GetCitizens from './citizen/GetCitizen';
import CreateCitizen from './citizen/CreateCitizen';
import EditCitizen from './citizen/EditCitizen';
import DeleteCitizen from './citizen/DeleteCitizen'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome</h1>
                </header>
                <GetCitizens />
                <CreateCitizen /> 
                <EditCitizen />
                <DeleteCitizen />
            </div>
        );
    }
}

export default App;