<template>
  <div :id="this.targetName" @click="this.clickSelect" :class="'w-[' + this.s_width + '] min-w-[' + this.s_min + '] max-w-[' + this.s_max + ']'" class="relative">
    <p v-if="this.title" class="mb-2 text-xs font-bold text-[#222] text-left">
      {{ this.title }}
    </p>
    <div v-if="this.isDataObj" @click="this.selected = !this.selected" class="selnone w-full border-[#BBBBBB] focus:border-primary focus:ring-primary focus-within:border-primary input-wrap text-sm text-[#BBB]">
      <p :class="[this.data ? 'text-[#222]' : 'text-[#bbb]', 'cursor-pointer selnone focus-none w-[clac(100%_-_24px)] text-sm']">
        {{ this.data ? this.data.name : "선택" }}
      </p>
      <svg class="cursor-pointer selnone w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 6L8 10L12 6" stroke="#222222" stroke-width="2" stroke-linecap="round" />
      </svg>
    </div>
    <div v-else @click="this.selected = !this.selected" class="selnone w-full border-[#BBBBBB] focus:border-primary focus:ring-primary focus-within:border-primary input-wrap text-sm text-[#BBB]">
      <p :class="[this.data ? 'text-[#222]' : 'text-[#bbb]', 'cursor-pointer selnone focus-none w-[clac(100%_-_24px)] text-sm']">
        {{ this.data ? this.data : "선택" }}
      </p>
      <svg class="cursor-pointer selnone w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 6L8 10L12 6" stroke="#222222" stroke-width="2" stroke-linecap="round" />
      </svg>
    </div>
    <aside v-if="this.selected">
      <div
        :ref="this.targetName"
        :id="this.targetName"
        v-if="this.isDataObj"
        :class="[
          this.selected ? 'block' : 'hidden',
          this.title ? 'top-[75px]' : 'top-[52px]',
          'scroll-style w-full max-h-[250px] overflow-y-scroll border-[#BBBBBB] flex flex-wrap gap-1 shadow-xl border-t border-l border-r rounded-xl px-2 py-1.5 absolute left-0 z-20 bg-white select-shadow',
        ]"
      >
        <p v-for="(v, idx) in this.list" :key="idx" @click="this.$emit('update', v)" class="cursor-pointer w-full text-sm p-2 hover:bg-gray-6 rounded-[5px]">
          {{ v.name }}
        </p>
      </div>
      <div
        :ref="this.targetName"
        :id="this.targetName"
        v-else
        :class="[
          this.selected ? 'block' : 'hidden',
          this.title ? 'top-[75px]' : 'top-[52px]',
          'scroll-style w-full max-h-[250px] overflow-y-scroll border-[#BBBBBB] flex flex-wrap gap-1 shadow-xl border-t border-l border-r rounded-xl px-2 py-1.5 absolute top-[52px] left-0 z-20 bg-white select-shadow',
        ]"
      >
        <p v-for="(v, idx) in this.list" :key="idx" @click="this.$emit('update', v.value)" class="cursor-pointer w-full text-sm p-2 hover:bg-gray-6 rounded-[5px]">
          {{ v.name }}
        </p>
      </div>
    </aside>
  </div>
</template>

<script>
import { useCommonStore } from "@/_stores";

export default {
  /*
    props 설명
    min: min-width(default 100%)
    max: max-width(default 100%)
    width: width(default 100%)
    list: 드롭다운에서 보여줄 리스트
    data: 부모 컴포넌트의 data(default 빈문자열)
    isDataObj: 전달되는 데이터가 object일 때 true
    */
  props: ["min", "max", "data", "width", "list", "isDataObj", "targetName", "title"],
  components: {},
  setup(props) {
    // console.log("props", props);
    return {};
  },
  data() {
    return {
      s_width: this.width === undefined ? "100%" : this.width,
      s_min: this.min === undefined ? "100%" : this.min,
      s_max: this.max === undefined ? "100%" : this.max,
      selected: false,
    };
  },
  watch: {},
  computed: {},
  methods: {
    clickSelect(event) {
      if (!event.target.classList.contains("selnone")) {
        this.selected = false;
      }
    },
  },
  mounted() {},
};
</script>
