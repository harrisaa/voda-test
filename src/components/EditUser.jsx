import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EditUser = ({ user, onClick, onChange }) => {
  const [userData, updateUserData] = useState({
    id: user.id,
    title: user.title,
    firstName: user.firstName,
    lastName: user.lastName,
    dob: user.dob,
  });

  const updateUser = (event) => {
    const field = event.target;
    updateUserData({
      ...userData,
      [field.id]: field.value,
    });
    onChange(event, userData)
  }

  return <li>
    <div>
      <label htmlFor="title">Title</label>
      <select id="title" value={userData.title} onChange={updateUser} onBlur={updateUser}>
        <option value="Ms">Ms</option>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
        <option value="Prof">Prof</option>
        <option value="Revd">Revd</option>
      </select>
    </div>
    <div>
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" type="text" value={userData.firstName} onChange={updateUser} onBlur={updateUser} />
    </div>
    <div>
      <label htmlFor="lastName">Last Name</label>
      <input id="lastName" type="text" value={userData.lastName} onChange={updateUser} onBlur={updateUser}  />
    </div>
    <div>
      <label htmlFor="dob">Date of birth</label>
      <input id="dob" type="text" value={userData.dob} onChange={updateUser} onBlur={updateUser}  />
    </div>
    <button onClick={onClick}>Update user</button>
  </li>
};

EditUser.propTypes = {
  user: PropTypes.any,
  onClick: PropTypes.func,
  onChange: PropTypes.func
};

export default EditUser;
