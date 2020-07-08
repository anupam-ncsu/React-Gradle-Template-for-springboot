import React from 'react';
import axios from 'axios';

export default class GetCitizen extends React.Component {
  state = {
    citizens: []
  };

  componentDidMount(){
    axios.get('/citizens').then(res => {
      this.setState({ citizens: res.data});
    });
  }

  render() {
    return <ul>{ this.state.citizens.map(citizen => <li key={citizen.id}>{citizen.id} {citizen.name}</li>)}
      </ul>;
  }
}

  