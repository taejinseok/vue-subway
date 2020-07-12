<template>
  <div class="bg-gray-200 h-screen">
    <div class="flex justify-center md:py-10 lg:py-10 app-container">
      <div
        class="max-w-md w-full lg:width-450px rounded bg-white shadow-lg p-6"
      >
        <div class="font-bold text-xl mb-4 relative w-full flex items-stretch">
          <div class="flex-1"></div>
          <div class="flex-1 text-center">구간 관리</div>
          <div class="flex-1 flex justify-end">
            <button
              id="subway-line-add-btn"
              class="modal-open bg-transparent bg-yellow-500 hover:bg-yellow-400 hover:text-gray-700 text-gray-800 text-sm px-3 py-1 rounded"
              @click="toggleModal"
            >
              구간 추가
            </button>
          </div>
        </div>
        <div class="flex relative">
          <div id="slider-controls" class="hidden lg:block xl:block">
            <button
              data-controls="prev"
              aria-controls="customize"
              tabindex="-1"
              class="prev prev-btn top-50 z-10 absolute top-0 left-10px bg-white rounded-full h-8 w-8 text-base text-gray-600 hover:text-gray-400 focus:text-gray-400 -ml-6 focus:outline-none focus:shadow-outline"
            >
              <span class="block" style="transform: scale(-1);">&#x279c;</span>
            </button>
            <button
              aria-controls="customize"
              tabindex="-1"
              data-controls="next"
              class="next next-btn top-50 z-10 absolute top-0 right-10px bg-white rounded-full h-8 w-8 text-base text-gray-600 hover:text-gray-400 focus:text-gray-400 -mr-6 focus:outline-none focus:shadow-outline"
            >
              <span class="block" style="transform: scale(1);">&#x279c;</span>
            </button>
          </div>
          <edge-slider />
        </div>
      </div>
    </div>

    <div
      class="modal z-10 fixed w-full h-full top-0 left-0 flex items-center justify-center"
      :class="modalClassObject"
    >
      <div
        class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
      ></div>
      <div
        class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
      >
        <div class="modal-content text-left px-8 py-4">
          <div class="flex justify-center items-center pb-3 pt-3">
            <p class="text-2xl font-bold ">구간 추가</p>
          </div>
          <form class="mb-4">
            <div class="relative w-full mt-3 mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                노선 선택
              </label>
              <div class="relative">
                <select
                  id="line-select-options"
                  class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  v-model="lineId"
                >
                  <option
                    v-for="line in subwayLines"
                    :key="line.id"
                    :value="line.id"
                    >{{ line.name }}</option
                  >
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap mb-10 w-full">
              <div class="w-5/12 h-12 text-gray-800">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  이전역
                </label>
                <div class="relative">
                  <select
                    id="previous-select-options"
                    class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    v-model="preStationId"
                  >
                    <option
                      v-for="station in stationsByLine"
                      :key="station.id"
                      :value="station.id"
                      >{{ station.name }}</option
                    >
                  </select>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                  >
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div
                class="w-2/12 h-12 text-center text-gray-800 flex justify-center items-center relative top-28px"
              >
                <span
                  class="mdi mdi-arrow-left-right-bold relative bottom-6px text-lg"
                ></span>
              </div>
              <div class="w-5/12 h-12 text-gray-800">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  대상역
                </label>
                <select
                  id="next-station-select-options"
                  class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  v-model="stationId"
                >
                  <option
                    v-for="station in stations"
                    :key="station.id"
                    :value="station.id"
                    >{{ station.name }}</option
                  >
                </select>
              </div>
            </div>

            <div class="flex flex-wrap mb-10 w-full">
              <div class="w-5/12 h-12 text-gray-800">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  거리
                </label>
                <input
                  class="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                  id="distance"
                  type="number"
                  value="0"
                  v-model="distance"
                />
              </div>
              <div class="w-2/12 h-12 text-gray-800"></div>
              <div class="w-5/12 h-12 text-gray-800">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  연결 시간
                </label>
                <input
                  class="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                  id="duration"
                  type="number"
                  value="0"
                  v-model="duration"
                />
              </div>
            </div>

            <div class="flex justify-end pt-4">
              <button
                class="modal-close px-4 bg-transparent p-3 rounded text-gray-600 hover:bg-gray-100 hover:text-gray-700 mr-2 text-sm"
                @click.prevent="toggleModal"
              >
                취소
              </button>
              <button
                type="submit"
                id="create-edge-button"
                class="px-4 bg-yellow-500 hover:bg-yellow-400 hover:text-gray-700 text-gray-800 rounded text-white text-sm"
                @click.prevent="createEdge"
              >
                확인
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EdgeSlider from "../components/EdgeSlider.vue";
import { mapGetters } from "vuex";
import {
  GET_STATIONS_BY_LINE,
  GET_LINE_DETAILS,
  GET_STATIONS
} from "../store/getters.type.js";
import { CREATE_EDGE, FETCH_STATIONS } from "../store/actions.type.js";

export default {
  components: {
    EdgeSlider
  },
  computed: {
    ...mapGetters({ stations: GET_STATIONS }),
    ...mapGetters({ subwayLines: GET_LINE_DETAILS })
  },
  mounted() {
    this.$store.dispatch(FETCH_STATIONS);
  },
  watch: {
    lineId: function(newVal) {
      this.stationsByLine = this.$store.getters[GET_STATIONS_BY_LINE](newVal);
    }
  },
  data() {
    return {
      lineId: 0,
      preStationId: 0,
      stationId: 0,
      duration: 0,
      distance: 0,
      stationsByLine: [],
      modalClassObject: {
        "modal-active": false,
        "opacity-0": true,
        "pointer-events-none": true
      }
    };
  },
  methods: {
    toggleModal() {
      const entries = Object.entries(this.modalClassObject);
      for (const [key, value] of entries) {
        this.modalClassObject[key] = !value;
      }
    },
    createEdge() {
      this.$store
        .dispatch(CREATE_EDGE, {
          lineId: this.lineId,
          payload: {
            preStationId: this.preStationId,
            stationId: this.stationId,
            distance: this.distance,
            duration: this.duration
          }
        })
        .then(() => this.toggleModal());
    }
  }
};
</script>

<style lang="css">
@import url("../lib/slider/tiny-slider.css");
</style>
