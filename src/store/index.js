//index.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    errors: {},
    itemImage: null
  },

  getters: {
    errors(state) {
      return state.errors;
    }
  },

  mutations: {
    SET_ERRORS(state, data) {
      state.errors = data;
    },
    setImage (state, image) {
        state.itemImage = image
    }
  },

  actions: {
    setErrors({ commit }, errors) {
      commit("SET_ERRORS", errors);
    },
    POM_setImage ({ commit }, image) {
        commit('setImage', image)
    }
  }
});