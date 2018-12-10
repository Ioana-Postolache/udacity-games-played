import React from 'react'
import PropTypes from 'prop-types'

const User=(props)=>{ return(<li className='User' key={props.user.username}>{props.user.username} played {props.hideNumberOfGames?'*':props.user.numberOfGames} games.</li>)}
User.propTypes={
  user: PropTypes.object.isRequired,
  hideNumberOfGames:PropTypes.bool.isRequired
}
export default User;