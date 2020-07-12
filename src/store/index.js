import Vue from "vue";
import Vuex from "vuex";
import { lines, lineDetails, stations } from "../utils/MockData.js";
import { EdgesService } from "../api";
import {
  GET_STATIONS_BY_LINE,
  GET_LINE_DETAILS,
  GET_LINES,
  GET_STATIONS
} from "./getters.type.js";
import { FETCH_EDGES, CREATE_EDGE } from "./actions.type.js";
import { FETCH_EDGES_END } from "./mutations.type.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lines,
    stations,
    lineDetails: lineDetails.lineDetailResponse
  },
  mutations: {
    [FETCH_EDGES_END](state, lineDetails) {
      state.lineDetails = lineDetails;
    }
  },
  actions: {
    async [FETCH_EDGES]({ commit }) {
      const { lineDetailResponse } = await EdgesService.get();
      console.log(lineDetailResponse);
      commit(FETCH_EDGES_END, lineDetailResponse);
    },
    async [CREATE_EDGE](context, { lineId, payload }) {
      await EdgesService.add(lineId, payload);
      await context.dispatch(FETCH_EDGES);
    }
  },
  getters: {
    [GET_LINES](state) {
      return state.lines;
    },
    [GET_STATIONS](state) {
      return state.stations;
    },
    [GET_LINE_DETAILS](state) {
      return state.lineDetails;
    },
    [GET_STATIONS_BY_LINE](state, getters) {
      return lineId => {
        const lineDetail = getters[GET_LINE_DETAILS].find(
          item => item.id === lineId
        );
        return lineDetail ? lineDetail.stations : [];
      };
    }
  }
});
