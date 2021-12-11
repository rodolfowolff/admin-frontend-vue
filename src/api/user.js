import axios from 'axios';

class usersService {
  async getAllUsers() {
    const resp = await axios.get('http://localhost:3001/api/users');
    return resp.data;
  }

  async deleteUser(cod) {
    const resp = await axios.delete(`http://localhost:3001/api/users/${cod}`);
    return resp.data;
  }

  async createUser(user) {
    const resp = await axios
      .post('http://localhost:3001/api/users', user)
      .then(response => response.data);
  }
}

export default new usersService;
