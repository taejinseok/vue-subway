import Vue from "vue";
import Vuex from "vuex";
import { EdgesService, StationsService } from "../api";
import {
  GET_LINE_DETAILS,
  GET_LINES,
  GET_STATIONS,
  GET_STATIONS_BY_LINE
} from "./getters.type.js";
import {
  CREATE_EDGE,
  EDIT_EDGE_REMOVE_STATION,
  FETCH_EDGES,
  FETCH_STATIONS
} from "./actions.type.js";
import { FETCH_EDGES_END, FETCH_STATIONS_END } from "./mutations.type.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lines: [],
    stations: [],
    lineDetails: []
  },
  mutations: {
    [FETCH_EDGES_END](state, lineDetails) {
      state.lineDetails = lineDetails;
    },

    [FETCH_STATIONS_END](state, stations) {
      state.stations = stations;
    }
  },
  actions: {
    async [FETCH_EDGES]({ commit }) {
      const { lineDetailResponse } = await EdgesService.get();
      commit(FETCH_EDGES_END, lineDetailResponse);
    },
    async [CREATE_EDGE](context, { lineId, payload }) {
      await EdgesService.add(lineId, payload);
      await context.dispatch(FETCH_EDGES);
    },
    async [EDIT_EDGE_REMOVE_STATION](context, { lineId, stationId }) {
      await EdgesService.remove(lineId, stationId);
      await context.dispatch(FETCH_EDGES);
    },

    async [FETCH_STATIONS]({ commit }) {
      commit(FETCH_STATIONS_END, await StationsService.get());
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
