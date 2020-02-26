import axios from 'axios'

const state = {
    user: null
};
const getters = {};
const mutations = {};
const actions = {
    async fetchUser({ commit }) {
        const { data } = await axios.get('/api/user')
        console.log(data)
    }
};

export default {
    namespace: true,
    state,
    mutations,
    actions
}