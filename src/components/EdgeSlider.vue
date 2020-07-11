<template>
  <div class="w-full h-full">
    <div class="subway-lines-slider">
      <edge-line v-for="line in subwayLines" :key="line.id" :line="line" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { GET_LINE_DETAILS } from "../store/getters.type.js";
import EdgeLine from "./EdgeLine.vue";
import tns from "../../public/static/admin/lib/slider/tiny-slider.js";

export default {
  name: "EdgeSlider",
  components: {
    EdgeLine
  },
  computed: {
    ...mapGetters({ subwayLines: GET_LINE_DETAILS })
  },
  mounted() {
    this.initSlider();
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
