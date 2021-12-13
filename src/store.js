import { createStore } from 'vuex';
import UserService from './api/user';
// import mutations from './store/mutations';
// import actions from './store/actions';
// import getters from './store/getters';

export default createStore({
  state: {
    users: [],
  },
  mutations: {
    createUser(state, user) {
      state.users.push(user);
    },
    setUsers(state, users) {
      state.users = users;
    },
    deleteUser(state, cod) {
      const userCod = state.users.find(user => user.cod == cod);
      state.users.splice(state.users.indexOf(userCod), 1);
    },
  },
  actions: {
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
  },
  getters: {
    users(state) {
      return state.users;
    }
  },
});
