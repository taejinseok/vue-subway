<template>
  <div class="bg-gray-200 h-screen">
    <div class="flex justify-center md:py-10 lg:py-10 app-container">
      <div class="max-w-md width-450px rounded bg-white shadow-lg p-6">
        <div class="font-bold text-xl mb-3 text-center">지하철역 관리</div>
        <form>
          <div class="mb-4">
            <input
              class="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              id="station-name"
              type="text"
              autocomplete="off"
              placeholder="역 이름을 추가해주세요."
              v-model="inputStationValue"
            />
            <button
              id="station-add-btn"
              class="inline-block text-sm bg-yellow-500 hover:bg-yellow-400 hover:text-gray-700 text-gray-800 font-bold py-2 px-4 rounded"
              @click.prevent="addStation"
            >
              추가
            </button>
          </div>
        </form>
        <div class="mt-5 flex station-list-container relative overflow-y-auto">
          <div id="station-list" class="w-full">
            <station-item
              v-for="data in stations"
              :key="data.name"
              :station="data"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { GET_STATIONS } from "../store/getters.type.js";
import { ADD_STATION, FETCH_STATIONS } from "../store/actions.type.js";
import StationItem from "../components/StationItem.vue";

export default {
  components: {
    StationItem
  },
  computed: {
    ...mapGetters({ stations: GET_STATIONS })
  },
  mounted() {
    this.$store.dispatch(FETCH_STATIONS);
  },
  data() {
    return {
      inputStationValue: ""
    };
  },
  methods: {
    addStation() {
      if (!this.inputStationValue) {
        return;
      }
      this.$store
        .dispatch(ADD_STATION, { name: this.inputStationValue })
        .then(() => (this.inputStationValue = ""));
    }
  }
};
</script>

<style>
.station-list-container {
  max-height: calc(100% - 100px);
}

#station-name {
  width: calc(100% - 61px);
}
</style>
