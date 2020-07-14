<template>
  <div class="bg-gray-200 h-screen">
    <div class="flex justify-center md:py-10 lg:py-10 app-container">
      <div class="max-w-md width-450px rounded bg-white shadow-lg p-6">
        <div>
          <div
            class="font-bold text-xl mb-4 relative w-full flex items-stretch"
          >
            <div class="flex-1"></div>
            <div class="flex-1 text-center">노선 관리</div>
            <div class="flex-1 flex justify-end">
              <button
                id="subway-line-create-btn"
                class="modal-open bg-transparent bg-yellow-500 hover:bg-yellow-400 hover:text-gray-700 text-gray-800 text-sm px-3 py-1 rounded"
                @click="toggleModal"
              >
                노선 추가
              </button>
            </div>
          </div>
          <line-info />
        </div>
        <line-container />
      </div>

      <div
        class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center"
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
              <p class="text-2xl font-bold ">노선 정보</p>
            </div>
            <form id="subway-line-create-form" class="mb-4">
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="subway-line-name"
                >
                  노선 이름
                </label>
                <input
                  id="subway-line-name"
                  name="name"
                  type="text"
                  placeholder="노선 이름을 입력해주세요"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  v-model="line.name"
                />
              </div>
              <div class="flex mb-4">
                <div class="w-1/3 pr-2">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="subway-start-time"
                  >
                    첫차 시간
                  </label>
                  <input
                    id="subway-start-time"
                    name="startTime"
                    type="text"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="첫차 시간"
                    v-model="line.startTime"
                  />
                </div>
                <div class="w-1/3 pr-2">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="subway-end-time"
                  >
                    막차 시간
                  </label>
                  <input
                    id="subway-end-time"
                    name="endTime"
                    type="text"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="막차 시간"
                    v-model="line.endTime"
                  />
                </div>

                <div class="w-1/3">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="subway-interval-time"
                  >
                    간격
                  </label>
                  <input
                    id="subway-interval-time"
                    name="intervalTime"
                    type="number"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="간격"
                    v-model="line.intervalTime"
                  />
                </div>
              </div>

              <div id="subway-line-color-select-container" class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="subway-line-color"
                >
                  노선 색상
                </label>
                <input
                  placeholder="색상을 선택해주세요"
                  class="bg-gray-200 mb-4 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="subway-line-color"
                  type="text"
                  disabled
                />
                <ColorSelector
                  v-for="(option, index) in subwayLineColorOptions"
                  :option="option"
                  :key="option.color"
                  :index="index"
                />
              </div>

              <div class="action-container flex justify-end pt-4">
                <button
                  class="modal-close px-4 bg-transparent p-3 rounded text-gray-600 hover:bg-gray-100 hover:text-gray-700 mr-2 text-sm"
                  @click.prevent="toggleModal"
                >
                  취소
                </button>
                <button
                  id="submit-button"
                  class="px-4 bg-yellow-500 hover:bg-yellow-400 hover:text-gray-700 text-gray-800 rounded text-white text-sm"
                  @click.prevent="publishLine(line.id)"
                >
                  확인
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ColorSelector from "@/components/ColorSelector.vue";
import { subwayLineColorOptions } from "@/utils/defaultSubwayData.js";
import LineContainer from "../components/LineContainer.vue";
import LineInfo from "../components/LineInfo.vue";
import { mapGetters } from "vuex";
import { GET_LINE, GET_LINE_MODAL_CLASS } from "../store/getters.type.js";
import { ADD_LINE, EDIT_LINE } from "../store/actions.type.js";
import { RESET_LINE, TOGGLE_LINE_MODAL } from "../store/mutations.type.js";

export default {
  components: {
    LineInfo,
    LineContainer,
    ColorSelector
  },
  computed: {
    ...mapGetters({
      modalClassObject: GET_LINE_MODAL_CLASS
    }),
    ...mapGetters({
      line: GET_LINE
    })
  },
  data() {
    return {
      subwayLineColorOptions
    };
  },
  methods: {
    toggleModal() {
      this.$store.commit(TOGGLE_LINE_MODAL);
      this.$store.commit(RESET_LINE);
    },
    publishLine(lineId) {
      const action = lineId ? EDIT_LINE : ADD_LINE;
      this.$store.dispatch(action).then(() => this.toggleModal());
    }
  }
};
</script>

<style>
.subway-lines-container {
  max-height: calc(100vh - 450px);
}

.lines-list {
  height: calc(100% - 400px);
}
</style>
