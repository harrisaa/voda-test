import React from 'react';
import PropTypes from 'prop-types';

const EditUser = ({ user, onClick }) => {
  return <li>
    <div>
      <label htmlFor="title">Title</label>
      <select id="title" value={user.title}>
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
      <input id="firstName" type="text" value={user.firstName} />
    </div>
    <div>
      <label htmlFor="firstName">Last Name</label>
      <input id="lastName" type="text" value={user.lastName} />
    </div>
    <div>
      <label htmlFor="dob">Date of birth</label>
      <input id="dob" type="text" value={user.dob} />
    </div>
    {/*<button onClick={() => onClick(title, firstName, lastName, dob)}>Update user</button>*/}
  </li>
};

/*EditUser.propTypes = {
  user: PropTypes.any,
  onClick: PropTypes.func
};*/

export default EditUser;
