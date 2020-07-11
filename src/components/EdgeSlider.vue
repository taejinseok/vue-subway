<template>
  <div class="w-full h-full">
    <div class="subway-lines-slider">
      <edge-line v-for="line in subwayLines" :key="line.id" :line="line" />
    </div>
  </div>
</template>

<script>
import EdgeLine from "./EdgeLine.vue";
import { lineDetails } from "../utils/MockData.js";
import tns from "../../public/static/admin/lib/slider/tiny-slider.js";

export default {
  name: "EdgeSlider",
  components: {
    EdgeLine
  },
  mounted() {
    this.initSlider();
  },
  data() {
    return {
      subwayLines: lineDetails.lineDetailResponse
    };
  },
  methods: {
    initSlider() {
      tns({
        container: ".subway-lines-slider",
        loop: true,
        slideBy: "page",
        speed: 400,
        autoplayButtonOutput: false,
        mouseDrag: true,
        lazyload: true,
        controlsContainer: "#slider-controls",
        items: 1,
        edgePadding: 25
      });
    }
  }
};
</script>
