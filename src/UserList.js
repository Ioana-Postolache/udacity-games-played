import React from 'react'
import PropType from 'prop-types'
import User from './User'

class  UserList extends React.Component{
state={hideNumberOfGames:false}
handleHide=()=>{this.setState((prevState)=>({hideNumberOfGames: prevState.hideNumberOfGames===false?true:false}))}  
      render(){const {users}=this.props
       return(
         <div className="user-list">
            <button className="hide-games-number" onClick={this.handleHide}>{this.state.hideNumberOfGames?'Show the number of games played':'Hide the number of games played'}.</button>
            <ul className="user-list">
                  {users.map(user=><User key={user.username} user={user} hideNumberOfGames={this.state.hideNumberOfGames}/>)}
            </ul>
        </div>)}}
UserList.proptype={
  users: PropType.array.isRequired}
 export default UserList;