import React, { useEffect, useState } from 'react';
import getUsers from '../api/';

import UserItem from '../components/UserItem'
import EditUser from '../components/EditUser'

const Users = () => {
  const [userData, setUserData] = useState(null);
  const [editableUserId, setEditableUserId] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
    const users = await getUsers()
    setUserData(users.data)
  };
    getUserData()
  }, []);

  const setSelectedUser = (user) => {
    setEditableUserId(user.id);
  };

  const editUser = ({title, firstName, lastName, dob}) => {
    console.log('....', title, firstName, lastName, dob);
  };

  if (!userData) return  null

    return (
      <div>
         <ul>
          {userData.map((user) =>
              <Choose>
                <When condition={user.id === editableUserId}>
                  <EditUser key={user.id} user={user} onClick={() => editUser(user)} />
                </When>
                <Otherwise>
                  <UserItem key={user.id} user={user} onClick={() => setSelectedUser(user)} />
                </Otherwise>
              </Choose>
          )}
        </ul>
      </div>
    )
}

export default Users
