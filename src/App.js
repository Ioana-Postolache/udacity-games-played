import React, { Component } from 'react';
import AddUser from './AddUser.js'
import UserList from './UserList.js'
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
    
    users: [
          
      {username:'Miti',
       firstname:'Miti',
       lastname:'Postolache',
       numberOfGames:2},
     
      {username:'Tupi',
      firstname:'Tupi',
      lastname:'Postolache',
      numberOfGames:3}
    ]
  }

onAddUser=newUser=>{
  this.setState((prevState) =>({
     
     users: [...prevState.users, newUser]}
               ))}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <UserList users={this.state.users}/>
        <AddUser 
         onAddUser={this.onAddUser}
         users={this.state.users}
         />
      </div>
    );
  }
}

export default App;
