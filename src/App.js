import React, { Component } from 'react';
import './App.css'

import GetCitizens from './citizen/GetCitizen';
import CreateCitizen from './citizen/CreateCitizen';
import EditCitizen from './citizen/EditCitizen';
import DeleteCitizen from './citizen/DeleteCitizen'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1 className="App-title">React Gradle template</h1>
                <GetCitizens />
                <CreateCitizen /> 
                <EditCitizen />
                <DeleteCitizen />
            </div>
        );
    }
}

export default App;