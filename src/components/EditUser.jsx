import React from 'react';
import PropTypes from 'prop-types';

const EditUser = (props) => {
  return <li>
    <p>
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" type="text" value={props.user.firstName} />
    </p>
      <strong>Edit ...Name: </strong>{props.user.title} {props.user.lastName}

    <p><strong>Date of birth:</strong> {props.user.dob}</p>
    <button onClick={props.onClick}>Save</button>
  </li>;
}

EditUser.propTypes = {
  user: PropTypes.any,
  onClick: PropTypes.func
};

export default EditUser
