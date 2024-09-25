<template>
  <section :class="isAtTop ? 'bg-transparent' : 'bg-white'" class="w-full fixed z-[10000] transition-colors duration-300">
    <div class="w-full relative py-6 min-h-[64px]">
      <img class="absolute left-10 top-4 w-[84px] !transform-none" src="/img/logo.png">
      <div class="flex justify-center items-center gap-10">
<!--        <a href="#about">About us</a>-->
<!--        <a href="#service-area">Service</a>-->
<!--        <a href="#portfolio">Portfolio</a>-->
<!--        <a href="#contact">Contact</a>-->
      </div>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      isAtTop: true, // 스크롤이 최상단인지 여부를 추적하는 변수
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      // 스크롤 위치가 0일 때 배경을 투명으로 설정
      this.isAtTop = window.scrollY === 0;
    },
  },
};
</script>
