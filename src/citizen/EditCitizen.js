import React from 'react';
import axios from 'axios';

export default class EditCitizen extends React.Component {
    state = {
        name: '',
        id: ''
    };

    handleChangeId = event => {
        this.setState({ id: event.target.value});
    }  

    handleChangeName = event => {
        this.setState({ name: event.target.value });
    } 

    handleSubmit = event => {
        event.preventDefault();

        axios({
            method: 'put',
            url: '/citizen/update',
            data: {
                id: this.state.id,
                name: this.state.name
            }
        })

    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Citizen ID:
                    <input type="text" name="id" onChange={this.handleChangeId}/>
                </label>
                <label>
                    Citizen Name:
                    <input type="text" name="name" onChange={this.handleChangeName}/>
                </label>
                <button type="submit">Edit Citizen</button>
            </form>
        );
    }
}

    