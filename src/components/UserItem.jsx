import React from 'react';
import PropTypes from 'prop-types';

const UserItem = (props) => {
  return <li>
    <p><strong>Name: </strong>{props.user.title} {props.user.firstName} {props.user.lastName}</p>
    <p><strong>Date of birth:</strong> {props.user.dob}</p>
    <button onClick={props.onClick}>Edit user</button>
  </li>;
}

UserItem.propTypes = {
  user: PropTypes.any,
  onClick: PropTypes.func
};

export default UserItem
