const state = {
  tasks: [
    {
      'id': 1,
      'title': 'New HP Feature',
      'start': '12 minutes',
      'end': '12 minutes',
      'duration': '2 minutes'
    },
    {
      'id': 2,
      'title': 'New PDP Design',
      'start': '2 minutes',
      'end': '16 minutes',
      'duration': '2 minutes'
    }
  ]
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