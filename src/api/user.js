import axios from 'axios';

class usersService {
  async getAllUsers() {
    const resp = await axios.get('http://localhost:3001/api/users');
    return resp.data;
  }

  async deleteUser(cod) {
    const resp = await axios.delete(`http://localhost:3001/api/users/${cod}`);
    console.log('Usuário deletado com sucesso!', cod);
    return resp.data;
  }
}

export default new usersService;
