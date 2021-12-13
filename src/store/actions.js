import UserService from '@/api/user';

export default {
  createUser({ commit }, user) {
    UserService.createUser(user).then(response => {
      commit('createUser', response);
    });
  },
  setUsers({ commit }, users) {
    commit('setUsers', users);
  },
  deleteUser({ commit }, cod) {
    UserService.deleteUser(cod).then(() => {
      commit('deleteUser', cod);
    });
  }
};
