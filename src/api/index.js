import axios from 'axios';

const getUsers = () => {
  return axios
      .get('https://demo5743298.mockable.io/people-voda')
};

export default getUsers
