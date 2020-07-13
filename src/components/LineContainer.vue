<template>
  <div class="mt-5 flex subway-lines-container relative overflow-y-auto">
    <div id="subway-line-list" class="w-full">
      <line-item
        @toggleModalToEdit="helo"
        v-for="line of lines"
        :key="line.id"
        :line="line"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { GET_LINES } from "../store/getters.type.js";
import { FETCH_LINES } from "../store/actions.type.js";
import LineItem from "./LineItem.vue";

export default {
  components: {
    LineItem
  },
  computed: {
    ...mapGetters({ lines: GET_LINES })
  },
  mounted() {
    this.$store.dispatch(FETCH_LINES);
  },
  methods: {
    helo() {
      console.log("ggg");
    }
  }
};
</script>

<style scoped></style>
