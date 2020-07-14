<template>
  <div class="lines-info flex flex-wrap mb-3 w-full">
    <div class="w-1/2 p-2 text-center text-gray-800 bg-gray-200">
      첫차 시간
    </div>
    <div class="w-1/2 p-2 text-center text-gray-800 bg-gray-100">
      {{ line.startTime }}
    </div>
    <div class="w-1/2 p-2 text-center text-gray-800 bg-gray-200">
      막차 시간
    </div>
    <div class="w-1/2 p-2 text-center text-gray-800 bg-gray-100">
      {{ line.endTime }}
    </div>
    <div class="w-1/2 p-2 text-center text-gray-800 bg-gray-200">
      간격
    </div>
    <div class="w-1/2 p-2 text-center text-gray-800 bg-gray-100">
      {{ line.intervalTime }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { GET_LINE } from "../store/getters.type.js";

export default {
  computed: {
    ...mapGetters({ line: GET_LINE })
  }
};
</script>

<style scoped></style>
