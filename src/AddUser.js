import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './index.css';

class AddUser extends Component{
  static propTypes = {
    users: PropTypes.array.isRequired,
    onAddUser: PropTypes.func.isRequired
  }
  state={
    user: {username:'',
    firstname:'',
    lastname:'',
    numberOfGames:0}  ,
    userExists: false
  }
handleChange = event => {
    const { name, value } = event.target;
    this.setState((prevState) =>({...prevState, user:{ ...prevState.user, [name]: value }}));
  };

checkUserExists=(currUsername)=>{return this.props.users.filter(user => user.username===currUsername).length===0? false:true                             
                                 };

 handleSubmit = event => {
    event.preventDefault();
   const userExists=this.checkUserExists(this.state.user.username)
   if (!userExists){
         this.props.onAddUser(this.state.user);
   }
   this.setState(()=>({userExists:userExists}));

  };
 inputIsEmpty = () => {
    return this.state.user.username===''||this.state.user.firstname===''||this.state.user.lastname==='';
  };
  render(){
const {username, firstname, lastname}=this.state
return(
 
        <form onSubmit={this.handleSubmit}>
        <label>
         Username:
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={this.handleChange}
          />
        </label>
        <label>
         FirstName:
          <input
            type="text"
            name="firstname"
            placeholder="Firstname"
            value={firstname}
            onChange={this.handleChange}
          />
        </label>
        <label>
         LastName:
          <input
            type="text"
            name="lastname"
            placeholder="Lastname"
            value={lastname}
            onChange={this.handleChange}
          />
        </label>
          <button disabled={this.inputIsEmpty()}>Add</button>
          {this.state.userExists===true&&<p className="error">Username already exists!</p>}
        </form>)
}
}

export default AddUser;