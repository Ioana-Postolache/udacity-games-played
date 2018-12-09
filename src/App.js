import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state={
    users:
    [
      {userId: 1,
       username:'Miti',
       firstname:'Miti',
       lastname:'Postolache',
       numberOfGames:2},
     {userId: 2,
      username:'Tupi',
      firstname:'Tupi',
      lastname:'Postolache',
      numberOfGames:3}
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <button className="hide-games-number">Hide the number of games played.</button>
        <ul className="user-list">
          {this.state.users.map(user=><li key={user.userId}>{user.username} played {user.numberOfGames} games.</li>)}
        </ul>
       <button className="add-user">Add user</button>
        
      </div>
    );
  }
}

export default App;
