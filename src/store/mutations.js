export default {
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
};
