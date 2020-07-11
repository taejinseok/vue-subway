<template>
  <div data-id="line.id" class="subway-line-item inline-block w-1/2 px-2">
    <div class="rounded-sm w-full slider-list">
      <div :class="[hasColor, 'border', 'lint-name', 'px-4', 'py-1']">
        {{ line.name }}
      </div>
      <div class="overflow-y-auto height-90">
        <edge-station
          v-for="station in line.stations"
          :key="station.id"
          :station="station"
        />
      </div>
    </div>
  </div>
</template>

<script>
import EdgeStation from "./EdgeStation.vue";

export default {
  name: "EdgeLine",
  components: {
    EdgeStation
  },
  props: {
    line: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasColor() {
      return this.line.bgColor ? this.line.bgColor : "";
    }
  }
};
</script>

<style scoped>
.slider-list {
  height: calc(100vh - 275px);
}
</style>
