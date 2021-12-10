import { createStore } from 'vuex';

export default createStore({
    state: {
        users: [],
    },
    mutations: {
        setUsers(state, users) {
            state.users = users;
        },
    },
    actions: {
        setUsers({ commit }, users) {
            commit('setUsers', users);
        },
    },
    getters: {
        users(state) {
            return state.users;
        }
    }
});
