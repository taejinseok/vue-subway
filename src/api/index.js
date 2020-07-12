import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { BASE_URL } from "./config.js";

Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = BASE_URL;

const ApiService = {
  get(resource) {
    return Vue.axios.get(resource).then(res => res.data);
  },
  post(resource, params) {
    return Vue.axios.post(resource, params);
  }
  // update(resource, id, param) {},
  // delete(resource, id) {}
};

export const StationsService = {
  get() {
    return ApiService.get("stations");
  },
  add(params) {
    return ApiService.post("stations", params);
  },
  remove(id) {
    return ApiService.delete("stations", id);
  }
};

export const LinesService = {
  get() {
    return ApiService.get("lines");
  },
  add(params) {
    return ApiService.post("lines", params);
  },
  remove(id) {
    return ApiService.delete("lines", id);
  }
};

export const EdgesService = {
  get() {
    return ApiService.get("lines/detail");
  },
  add(lineId, params) {
    return ApiService.post(`/lines/${lineId}/stations`, params);
  }
};
