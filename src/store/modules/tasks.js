const baseState = {
  all: [
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
};

const mutations = {};

const actions = {
  //init({}) {},
};

export default {
  mutations,
  actions,
  state: baseState,
  namespaced: true,
};