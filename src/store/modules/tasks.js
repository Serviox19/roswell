const state = {
  tasks: []
};

const mutations = {
  ADD_TASK(state, task) {
    state.tasks.push(task)
  },
  REMOVE_TASK(state, task) {
    var tasks = state.tasks
    state.tasks.splice(tasks.indexOf(task), 1)
  },
  CLEAR_TASK(state) {
    state.newTask = {}
  }
};

const actions = {
  getTask({ commit }, task) {
    commit('GET_TASK', task)
  },
  addTask({ commit }, task) {
    commit('ADD_TASK', task)
  },
  removeTask({ commit }, task) {
    commit('REMOVE_TASK', task)
  },
  clearTask({ commit }) {
    commit('CLEAR_TASK')
  }
};

const getters = {
  newTask: state => state.newTask,
  tasks: state => state.tasks
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};