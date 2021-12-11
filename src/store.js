import { createStore } from 'vuex';
import UserService from '@/api/user';

export default createStore({
  state: {
    users: [],
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    deleteUser(state, cod) {
      const userCod = state.users.find(user => user.cod == cod);
      console.log('deletado com sucesso!', cod);
      state.users.splice(state.users.indexOf(userCod), 1);
    },
  },
  actions: {
    setUsers({ commit }, users) {
      commit('setUsers', users);
    },
    deleteUser({ commit }, cod) {
      UserService.deleteUser(cod).then(() => {
        console.log('Usuário deletado com sucesso!', cod);
        commit('deleteUser', cod);
      });
    },
  },
  getters: {
    users(state) {
      return state.users;
    }
  }
});
