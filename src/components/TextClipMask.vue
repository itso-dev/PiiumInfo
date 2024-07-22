<template>
  <main class="main">
    <div ref="container" class="container">
      <div ref="stickyMask" class="stickyMask">
        <video loop="loop" muted="muted" autoplay="autoplay" playsinline>
          <source src="/icons/main-video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div class="w-full h-screen absolute flex flex-col justify-center items-center gap-[127px] top-0 left-0 z-20">
      <p class="absolute top-[9%] mo:static text-base text-center text-[rgba(255,255,255,0.80)] mo:text-2xl mo:leading-[34px] mo:tracking-[-0.6px]">누구 하나 소외되는 사람이 없는 세상을 위해,<br>
        누구나 할 수 있고,<br class="mo:hidden"> 누구나가 살아갈 환경의 제공을 위해,</p>
      <img src="/icons/project30s.png" class="w-[270px] mo:w-[330px] absolute top-[50%] mo:static">
      <p class="absolute bottom-[9%] mo:static text-2xl leading-[34px] tracking-[-0.6px] mo:text-[32px] text-[#FFF] font-semibold mo:leading-[42px] mo:tracking-[-0.8px]">매일매일 행복할 수 있는<br class="md:hidden"> 프로젝트를 만드는 기업</p>
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const container = ref(null);
    const stickyMask = ref(null);
    const isMobile = window.innerWidth <= 575;
    const initialMaskSize = isMobile ? 0.6 : 0.5; // 초기 mask-size를 모바일에서는 크게 설정
    const targetMaskSize = isMobile ? 30 : 30; // 모바일에서는 더 작은 목표 크기 설정
    const easing = isMobile ? 0.2 : 0.15; // 모바일에서는 빠른 이징 설정
    let easedScrollProgress = 0;

    const animate = () => {
      if (!container.value || !stickyMask.value) return;

      const maskSizeProgress = targetMaskSize * getScrollProgress();
      stickyMask.value.style.webkitMaskSize = (initialMaskSize + maskSizeProgress) * 100 + "%";
      stickyMask.value.style.maskSize = (initialMaskSize + maskSizeProgress) * 100 + "%"; // 호환성 유지
      requestAnimationFrame(animate);
    };

    const getScrollProgress = () => {
      if (!container.value) return 0;

      const scrollProgress = window.scrollY / (container.value.getBoundingClientRect().height - window.innerHeight);
      const delta = scrollProgress - easedScrollProgress;
      easedScrollProgress += delta * easing;
      return easedScrollProgress; // 부드럽게 만들기 위해 easedScrollProgress 반환
    };

    onMounted(() => {
      animate(); // 초기 애니메이션 시작
    });

    return {
      container,
      stickyMask,
    };
  },
};
</script>

