/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import Vue from 'vue';
import Vuex from 'vuex';
import uuid from 'uuid/v1';

Vue.use(Vuex);

const STORAGE_KEY = '2018_10_17_dailydrinks';

function setStorage(value) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
}

function getStorage() {
  return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
}

const state = {
  list: getStorage(),
  isShowForm: false,
  formOrder: null,
};

const mutations = {
  add(state, order) {
    state.list.push({
      id: uuid(),
      ...order,
    });
    setStorage(state.list);
  },
  remove(state, order) {
    const found = state.list.find(v => v.id === order.id);
    if (found) {
      state.list.splice(state.list.indexOf(found), 1);
      setStorage(state.list);
    }
  },
  update(state, order) {
    const found = state.list.find(v => v.id === order.id);
    if (found) {
      state.list.splice(state.list.indexOf(found), 1, order);
      setStorage(state.list);
    }
  },
  clear(state) {
    state.list = [];
    setStorage(state.list);
  },
  showForm(state, order) {
    state.formOrder = order;
    state.isShowForm = true;
  },
  hideForm() {
    state.isShowForm = false;
  },
};

const actions = {
  add({ commit }, order) {
    commit('add', order);
  },
  remove({ commit }, order) {
    commit('remove', order);
  },
  update({ commit }, order) {
    commit('update', order);
  },
  clear({ commit }) {
    commit('clear');
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
