import Vue from "vue";
import Vuex from "vuex";
import { lines, lineDetails, stations } from "../utils/MockData.js";
import { GET_LINE_DETAILS, GET_LINES, GET_STATIONS } from "./getters.type.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lines,
    stations,
    lineDetails
  },
  mutations: {},
  actions: {},
  getters: {
    [GET_LINES](state) {
      return state.lines;
    },
    [GET_STATIONS](state) {
      return state.stations;
    },
    [GET_LINE_DETAILS](state) {
      return state.lineDetails.lineDetailResponse;
    }
  }
});
