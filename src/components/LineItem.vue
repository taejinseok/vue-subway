<template>
  <div
    :class="[
      { 'bg-gray-200': isSelected },
      'subway-line-item',
      'border',
      'border-gray-200',
      'py-2',
      'px-4',
      'text-gray-800'
    ]"
    @click="showLineInfo"
  >
    <span
      :class="[lineColor, 'w-3', 'h-3', 'rounded-full', 'inline-block', 'mr-1']"
    ></span>
    <span class="line-name" @click="showLineInfo">{{ line.name }}</span>
    <button
      class="hover:bg-gray-300 hover:text-gray-500 text-gray-300 px-1 rounded-full float-right"
      @click.stop="removeLine"
    >
      <span class="mdi mdi-delete" />
    </button>
    <button
      class="hover:bg-gray-300 hover:text-gray-500 text-gray-300 px-1 rounded-full float-right"
      @click.stop="toggleModalToEdit"
    >
      <span class="mdi mdi-pencil" />
    </button>
  </div>
</template>

<script>
import { REMOVE_LINE } from "../store/actions.type.js";
import {
  RESET_LINE,
  TOGGLE_LINE_MODAL,
  UPDATE_LINE_INFO
} from "../store/mutations.type.js";
import { mapGetters } from "vuex";
import { GET_LINE } from "../store/getters.type.js";

export default {
  props: {
    line: {
      type: Object,
      required: true
    }
  },
  computed: {
    lineColor() {
      return this.line.bgColor ? this.line.bgColor : "";
    },
    ...mapGetters({ selectedLine: GET_LINE }),
    isSelected() {
      return this.line.id === this.selectedLine.id;
    }
  },
  methods: {
    showLineInfo() {
      this.isSelected
        ? this.$store.commit(RESET_LINE)
        : this.$store.commit(UPDATE_LINE_INFO, this.line);
    },
    removeLine() {
      this.$store.dispatch(REMOVE_LINE, this.line);
    },
    toggleModalToEdit() {
      this.$store.commit(UPDATE_LINE_INFO, this.line);
      this.$store.commit(TOGGLE_LINE_MODAL);
    }
  }
};
</script>
