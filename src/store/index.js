import Vue from "vue";
import Vuex from "vuex";
import { EdgesService, LinesService, StationsService } from "../api";
import {
  GET_LINE,
  GET_LINE_DETAILS,
  GET_LINES,
  GET_LINE_MODAL_CLASS,
  GET_STATIONS,
  GET_STATIONS_BY_LINE,
  GET_EDGE_MODAL_CLASS,
  GET_EDGE
} from "./getters.type.js";
import {
  ADD_EDGE,
  ADD_LINE,
  ADD_STATION,
  EDIT_EDGE_REMOVE_STATION,
  EDIT_LINE,
  FETCH_EDGES,
  FETCH_LINES,
  FETCH_STATIONS,
  REMOVE_LINE,
  REMOVE_STATION
} from "./actions.type.js";
import {
  FETCH_EDGES_END,
  FETCH_LINES_END,
  FETCH_STATIONS_END,
  RESET_EDGE,
  RESET_LINE,
  TOGGLE_EDGE_MODAL,
  TOGGLE_LINE_MODAL,
  UPDATE_LINE_INFO
} from "./mutations.type.js";

Vue.use(Vuex);

const initialModalClass = {
  "modal-active": false,
  "opacity-0": true,
  "pointer-events-none": true
};

export default new Vuex.Store({
  state: {
    lines: [],
    stations: [],
    lineDetails: [],
    line: {
      id: "",
      name: "",
      startTime: "",
      endTime: "",
      intervalTime: ""
    },
    edge: {
      lineId: "",
      preStationId: "",
      stationId: "",
      duration: "",
      distance: ""
    },
    lineModalClass: { ...initialModalClass },
    edgeModalClass: { ...initialModalClass }
  },
  mutations: {
    [FETCH_EDGES_END](state, lineDetails) {
      state.lineDetails = lineDetails;
    },

    [FETCH_STATIONS_END](state, stations) {
      state.stations = stations;
    },

    [FETCH_LINES_END](state, lines) {
      state.lines = lines;
    },

    [UPDATE_LINE_INFO](state, line) {
      state.line = line;
    },

    [TOGGLE_LINE_MODAL](state) {
      const modalClass = state.lineModalClass;
      for (const [key, value] of Object.entries(modalClass)) {
        state.lineModalClass[key] = !value;
      }
    },
    [TOGGLE_EDGE_MODAL](state) {
      const modalClass = state.edgeModalClass;
      for (const [key, value] of Object.entries(modalClass)) {
        state.edgeModalClass[key] = !value;
      }
    },
    [RESET_LINE](state) {
      state.line = {
        id: "",
        name: "",
        startTime: "",
        endTime: "",
        intervalTime: ""
      };
    },
    [RESET_EDGE](state) {
      state.edge = {
        lineId: "",
        preStationId: "",
        stationId: "",
        duration: "",
        distance: ""
      };
    }
  },
  actions: {
    async [FETCH_EDGES]({ commit }) {
      const { lineDetailResponse } = await EdgesService.get();
      commit(FETCH_EDGES_END, lineDetailResponse);
    },
    async [ADD_EDGE](context) {
      const { lineId, ...payload } = context.state.edge;
      await EdgesService.add(lineId, payload);
      await context.dispatch(FETCH_EDGES);
    },
    async [EDIT_EDGE_REMOVE_STATION](context, { lineId, stationId }) {
      await EdgesService.remove(lineId, stationId);
      await context.dispatch(FETCH_EDGES);
    },

    async [FETCH_STATIONS]({ commit }) {
      commit(FETCH_STATIONS_END, await StationsService.get());
    },
    async [ADD_STATION](context, payload) {
      await StationsService.add(payload);
      await context.dispatch(FETCH_STATIONS);
    },
    async [REMOVE_STATION](context, { id }) {
      await StationsService.remove(id);
      await context.dispatch(FETCH_STATIONS);
    },

    async [FETCH_LINES]({ commit }) {
      commit(FETCH_LINES_END, await LinesService.get());
    },
    async [ADD_LINE](context) {
      const { id, ...payload } = context.state.line;
      await LinesService.add(payload);
      await context.dispatch(FETCH_LINES);
    },
    async [EDIT_LINE](context) {
      const { id, ...payload } = context.state.line;
      await LinesService.update(id, payload);
      await context.dispatch(FETCH_LINES);
    },
    async [REMOVE_LINE](context, { id }) {
      await LinesService.remove(id);
      await context.dispatch(FETCH_LINES);
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
    },

    [GET_LINE](state) {
      return state.line;
    },
    [GET_EDGE](state) {
      return state.edge;
    },

    [GET_LINE_MODAL_CLASS](state) {
      return state.lineModalClass;
    },
    [GET_EDGE_MODAL_CLASS](state) {
      return state.edgeModalClass;
    }
  }
});
