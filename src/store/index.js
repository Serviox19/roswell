import Vue from 'vue'
import Vuex from 'vuex'

import tasks from './modules/tasks.js';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const state = {};

export default new Vuex.Store({
  state,
  modules: {
    tasks
  },
  plugins: [createPersistedState()]
});