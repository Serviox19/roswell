const state = {
  tasks: [
    {
      'id': 1,
      'title': 'New HP Feature',
      'time': '12 minutes'
    },
    {
      'id': 2,
      'title': 'New PDP Design',
      'time': '16 minutes'
    }
  ],
  newTask: {}
};

const mutations = {
  GET_TASK(state, task) {
    state.newTask = task
  },
  ADD_TASK(state) {
    state.tasks.push(state.newTask)
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
  addTask({ commit }) {
    commit('ADD_TASK')
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