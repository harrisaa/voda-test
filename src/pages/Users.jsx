import React, { useEffect, useState } from 'react';
import getUsers from '../api/';

import UserItem from '../components/UserItem'
import EditUser from '../components/EditUser'

const Users = () => {
  const [userData, setUserData] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const updateForm = (event, user) => {
    event.preventDefault
    setSelectedUser(user);
  };

  useEffect(() => {
    const getUserData = async () => {
    const users = await getUsers()
    setUserData(users.data)
  };
    getUserData()
  }, []);

  const updateSelectedUser = (user) => {
    setSelectedUser(user);
  };

  const editUser = () => {
    const foundIndex = userData.findIndex(x => x.id === selectedUser.id);
    userData[foundIndex] = selectedUser;
    setSelectedUser(null)
  };

  if (!userData) return  null

    return (
      <div>
         <ul>
          {userData.map((user) =>
              <Choose>
                <When condition={selectedUser && user.id === selectedUser.id}>
                  <EditUser key={user.id} user={user} onClick={() => editUser(selectedUser)} onChange={updateForm} />
                </When>
                <Otherwise>
                  <UserItem key={user.id} user={user} onClick={() => updateSelectedUser(user)} />
                </Otherwise>
              </Choose>
          )}
        </ul>
      </div>
    )
}

export default Users
