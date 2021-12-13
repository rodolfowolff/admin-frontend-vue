import axios from 'axios';

class usersService {
  async createUser(payload) {
    const resp = await axios.post('http://localhost:3001/api/users', payload);
    return resp.data;
  }

  async getAllUsers() {
    const resp = await axios.get('http://localhost:3001/api/users');
    return resp.data;
  }

  async deleteUser(cod) {
    const resp = await axios.delete(`http://localhost:3001/api/users/${cod}`);
    return resp.data;
  }

}

export default new usersService;
