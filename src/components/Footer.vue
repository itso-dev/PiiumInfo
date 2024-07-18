<template>
  <div class="w-full pt-[65px] pb-[30px] flex flex-col items-center justify-center gap-5 relative">
    <img src="/icons/logo.png" class="w-[129px]">
    <div class="w-full box-border px-5 flex flex-col gap-4 ta:gap-2">
      <div class="w-full flex flex-col gap-2 ta:flex-row ta:gap-0 items-start mo:items-center">
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
    <div class="absolute top-[-35px] w-[70px] h-[70px] flex flex-col justify-center items-center bg-[#222] cursor-pointer" @click="scrollTop">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 4.32812L12.6406 4.67188L7.2031 10.125C7.05466 10.2461 6.98631 10.4395 7.02927 10.627C7.07224 10.8125 7.21873 10.959 7.40427 11.002C7.59177 11.0449 7.78513 10.9766 7.90623 10.8281L12.5 6.23438V21C12.498 21.1797 12.5918 21.3477 12.748 21.4395C12.9043 21.5293 13.0957 21.5293 13.2519 21.4395C13.4082 21.3477 13.5019 21.1797 13.5 21V6.23438L18.0937 10.8281C18.2148 10.9766 18.4082 11.0449 18.5957 11.002C18.7812 10.959 18.9277 10.8125 18.9707 10.627C19.0136 10.4395 18.9453 10.2461 18.7969 10.125L13.3594 4.67188L13 4.32812Z" fill="white"/>
      </svg>
      <p class="text-[#FFF] text-sm leading-5 tracking-[-0.35px] text-center">위로</p>
    </div>
  </div>

  
</template>

<script>
export default {
  props: [""],
  setup() {},
  components: {},
  data() {
    return {};
  },
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // 부드러운 스크롤 효과를 위해 추가합니다.
      });
    }
  },
  computed: {},
  mounted() {},
};
</script>
