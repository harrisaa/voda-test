import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EditUser = ({ user, onClick }) => {
  const [formData, updateFormData] = useState({
    title: user.title,
    firstName: user.firstName,
    lastName: user.lastName,
    dob: user.dob,
  });

  const updateForm = (event) => {
    const field = event.target;
    updateFormData({
      ...formData,
      [field.id]: field.value,
    });
  };

  return <li>
    <div>
      <label htmlFor="title">Title</label>
      <select id="title" value={formData.title} onChange={updateForm}>
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
      <input id="firstName" type="text" value={formData.firstName} onChange={updateForm} />
    </div>
    <div>
      <label htmlFor="lastName">Last Name</label>
      <input id="lastName" type="text" value={formData.lastName} onChange={updateForm} />
    </div>
    <div>
      <label htmlFor="dob">Date of birth</label>
      <input id="dob" type="text" value={formData.dob} onChange={updateForm} />
    </div>
    <button onClick={() => onClick(formData)}>Update user</button>
  </li>
};

EditUser.propTypes = {
  user: PropTypes.any,
  onClick: PropTypes.func
};

export default EditUser;
