<template>
  <div class="list-item border border-gray-200 py-2 px-4 text-gray-800">
    {{ station.name }}
    <button
      class="hover:bg-gray-300 hover:text-gray-500 text-gray-300 px-1 rounded-full float-right"
      @click="removeStation"
    >
      <span class="mdi mdi-delete"></span>
    </button>
  </div>
</template>

<script>
import { REMOVE_STATION } from "../store/actions.type.js";

export default {
  props: {
    station: {
      type: Object,
      required: true
    }
  },
  methods: {
    removeStation() {
      this.$store.dispatch(REMOVE_STATION, this.station);
    }
  }
};
</script>
