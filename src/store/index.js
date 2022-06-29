import Vue from 'vue'
import Vuex from 'vuex'

import tasks from './modules/tasks.js';

Vue.use(Vuex)

const state = {};

export default new Vuex.Store({
  state,
  modules: {
    tasks
  },
});