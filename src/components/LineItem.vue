<template>
  <div class="subway-line-item border border-gray-200 py-2 px-4 text-gray-800">
    <span
      :class="[lineColor, 'w-3', 'h-3', 'rounded-full', 'inline-block', 'mr-1']"
    ></span>
    <span class="line-name" @click="showLineInfo">{{ line.name }}</span>
    <!--    <hover-button button-type="mdi-delete" />-->
    <!--    <hover-button button-type="mdi-pencil" />-->
    <button
      class="hover:bg-gray-300 hover:text-gray-500 text-gray-300 px-1 rounded-full float-right"
      @click="removeLine"
    >
      <span class="mdi mdi-delete" />
    </button>
    <button
      class="hover:bg-gray-300 hover:text-gray-500 text-gray-300 px-1 rounded-full float-right"
      @click="toggleModalToEdit"
    >
      <span class="mdi mdi-pencil" />
    </button>
  </div>
</template>

<script>
import { REMOVE_LINE } from "../store/actions.type.js";
import {
  TOGGLE_MODAL_VISIBLE,
  UPDATE_LINE_INFO
} from "../store/mutations.type.js";

export default {
  components: {},
  props: {
    line: {
      type: Object,
      required: true
    }
  },
  computed: {
    lineColor() {
      return this.line.bgColor ? this.line.bgColor : "";
    }
  },
  methods: {
    showLineInfo() {
      this.$emit("clickForShow", this.line);
    },
    removeLine() {
      this.$store.dispatch(REMOVE_LINE, this.line);
    },
    toggleModalToEdit() {
      this.$store.commit(UPDATE_LINE_INFO, this.line);
      this.$store.commit(TOGGLE_MODAL_VISIBLE);
    }
  }
};
</script>
