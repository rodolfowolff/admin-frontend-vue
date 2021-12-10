import axios from 'axios';

class usersService {
  getAllUsers() {
    return axios.get('http://localhost:3001/api/users').then(resp => {
      return resp.data;
    });
  }
}

export default new usersService;
