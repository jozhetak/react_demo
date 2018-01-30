import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {person: []};
  }

  componentDidMount() {
    this.UserList();
  }
  // must use arrow function!!
  UserList() {
    axios.get('https://my.api.mockaroo.com/user_data.json?key=7ff9aa30')
      .then((resp) => {
        this.setState({ person: resp.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const persons = this.state.person.map((item, i) => (
      <div key={item.id}>
        <h1>{ item.firstName } { item.lastName }</h1>
        <span>{ item.email }</span>
        <hr/>
      </div>
    ));
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div id="layout-content" className="layout-content-wrapper">
          <div className="panel-list">{ persons }</div>
        </div>
      </div>
    );
  }
}

export default App;
