<template>
  <div class="w-full pt-[65px] pb-[30px] flex flex-col items-center justify-center gap-5 relative">
    <img src="/icons/logo.png" class="w-[129px]">
    <div class="w-full box-border px-5 flex flex-col gap-4 ta:gap-2">
      <b class="h-[14px] text-[#546AB8] text-xs pr-5 border-r border-[#DDD] cursor-pointer" @click="openAgree">개인정보처리방침</b>
      <div class="w-full flex flex-col gap-2 ta:flex-row ta:gap-0 items-start mo:items-center justify-center">
        <b class="text-[#767676] text-xs ta:pr-2">프로젝트서티즈</b>
        <div class="h-[14px] flex items-center gap-2.5 ta:px-2 ta:border-l ta:border-r border-[#DDD]">
          <b class="text-[#767676] text-xs">대표</b>
          <p class="text-[#767676] text-xs">고경민</p>
        </div>
        <div class="h-[14px] flex items-center gap-2.5 ta:px-2 ta:border-r border-[#DDD]">
          <b class="text-[#767676] text-xs">사업자등록번호</b>
          <p class="text-[#767676] text-xs">156-81-03105</p>
        </div>
        <div class="flex items-center gap-2.5 ta:pl-2">
          <b class="text-[#767676] text-xs">주소</b>
          <p class="text-[#767676] text-xs">경기도 안산시 단원구 풍전로 37-9, 304동 308-A 18호</p>
        </div>
      </div>
      <p class="text-[#767676] text-xs text-left mo:text-center">Copyright ⓒ프로젝트서티즈. ALL RIGHTS RESERVED.</p>
    </div>
    <div class="absolute top-[-35px] w-[70px] h-[70px] flex flex-col justify-center items-center bg-[#222] border border-[#111] cursor-pointer" @click="scrollTop"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
      :class="{ 'hover:bg-[#FFF]': isHovered }"
      style="transition: background-color 0.3s ease;">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 4.32812L12.6406 4.67188L7.2031 10.125C7.05466 10.2461 6.98631 10.4395 7.02927 10.627C7.07224 10.8125 7.21873 10.959 7.40427 11.002C7.59177 11.0449 7.78513 10.9766 7.90623 10.8281L12.5 6.23438V21C12.498 21.1797 12.5918 21.3477 12.748 21.4395C12.9043 21.5293 13.0957 21.5293 13.2519 21.4395C13.4082 21.3477 13.5019 21.1797 13.5 21V6.23438L18.0937 10.8281C18.2148 10.9766 18.4082 11.0449 18.5957 11.002C18.7812 10.959 18.9277 10.8125 18.9707 10.627C19.0136 10.4395 18.9453 10.2461 18.7969 10.125L13.3594 4.67188L13 4.32812Z" :fill="iconColor"/>
      </svg>
      <p class="text-sm leading-5 tracking-[-0.35px] text-center" :style="{ transition: 'color 0.3s', color: textColor }">위로</p>
    </div>
  </div>

  <article class="agreeModal left-0 mi:max-w-[1080px] w-full h-screen mi:h-[95vh] bg-[#FFF] box-border pt-[60px] px-5 mo:px-12 pb-5 fixed top-0 mi:top-[2.5vh] mi:left-[50%] mi:translate-x-[-50%] z-50 flex flex-col gap-5 justify-center items-center" v-if="this.agreeModal">
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"
      class="absolute top-5 right-5 cursor-pointer" @click="closeAgree">
      <path d="M22.7 5.2998L4.70001 23.2998" stroke="#767676" stroke-width="2" stroke-linecap="round"/>
      <path d="M22.7 23.2998L4.70001 5.2998" stroke="#767676" stroke-width="2" stroke-linecap="round"
      />
    </svg>
    <div class="flex flex-col gap-1.5 justify-center items-center">
      <img src="/icons/logo.png" class="max-w-[80px] mo:max-w-[120px] w-full" />
      <b class="text-[32px] leading-[42px] tracking-[-0.8px] text-[#111] mo:text-[40px] mo:leading-[52px] mo:tracking-[-1px]">개인정보처리방침</b>
    </div>
    <Privacy />
  </article>

  <div class="fixed top-0 left-0 w-full h-full bg-[#000] opacity-60 z-40" v-if="this.modalBg"></div>

  
</template>

<script>
import Privacy from "@/components/Privacy.vue";

export default {
  props: [""],
  setup() {},
  components: {
    Privacy
  },
  data() {
    return {
      isHovered: false,
      agreeModal: false,
      modalBg: false,
    };
  },
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // 부드러운 스크롤 효과를 위해 추가합니다.
      });
    },
    openAgree() {
      this.agreeModal = true;
      this.modalBg = true;
    },
    closeAgree() {
      this.agreeModal = false;
      this.modalBg = false;
    },
  },
  computed: {
    iconColor() {
      return this.isHovered ? '#222' : '#FFF'; 
    },
    textColor() {
      return this.isHovered ? '#222' : '#FFF';
    }
  },
  mounted() {},
};
</script>
