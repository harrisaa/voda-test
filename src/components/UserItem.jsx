import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user, onClick }) => {
  return <li>
    <p><strong>Name: </strong>{user.title} {user.firstName} {user.lastName}</p>
    <p><strong>Date of birth:</strong> {user.dob}</p>
    <button onClick={onClick}>Edit user</button>
  </li>;
}

UserItem.propTypes = {
  user: PropTypes.any,
  onClick: PropTypes.func
};

export default UserItem
