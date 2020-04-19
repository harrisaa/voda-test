import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EditUser = ({ user, onClick, onChange }) => {
  const [formData, updateFormData] = useState({
    id: user.id,
    title: user.title,
    firstName: user.firstName,
    lastName: user.lastName,
    dob: user.dob,
  });

  const updateUse = (event) => {
    const field = event.target;
    updateFormData({
      ...formData,
      [field.id]: field.value,
    });
    onChange(event, formData)
  }

  return <li>
    <div>
      <label htmlFor="title">Title</label>
      <select id="title" value={formData.title} onChange={updateUse}>
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
      <input id="firstName" type="text" value={formData.firstName} onChange={updateUse} />
    </div>
    <div>
      <label htmlFor="lastName">Last Name</label>
      <input id="lastName" type="text" value={formData.lastName} onChange={updateUse} />
    </div>
    <div>
      <label htmlFor="dob">Date of birth</label>
      <input id="dob" type="text" value={formData.dob} onChange={updateUse} />
    </div>
    <button onClick={() => onClick(formData)}>Update user</button>
  </li>
};

EditUser.propTypes = {
  user: PropTypes.any,
  onClick: PropTypes.func,
  onChange: PropTypes.func
};

export default EditUser;
