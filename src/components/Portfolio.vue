<template>
  <div id="portfolio" class="flex gap-2 overflow-x-scroll justify-start mt-20 w-full max-md:mt-10">
    <div class="w-[200px] flex flex-col gap-2 flex-shrink-0">
      <img class="w-full !transform-none" src="/img/portfolio/p01.png">
      <img class="w-full !transform-none" src="/img/portfolio/p16.png">
    </div>
    <div class="w-[200px] flex flex-col gap-2 flex-shrink-0">
      <img class="w-full !transform-none" src="/img/portfolio/p02.png">
      <img class="w-full !transform-none" src="/img/portfolio/p17.png">
    </div>
    <div class="w-[200px] flex flex-col gap-2 flex-shrink-0">
      <img class="w-full !transform-none" src="/img/portfolio/p03.png">
      <img class="w-full !transform-none" src="/img/portfolio/p18.png">
    </div>
    <div class="w-[200px] flex flex-col gap-2 flex-shrink-0">
      <img class="w-full !transform-none" src="/img/portfolio/p04.png">
      <img class="w-full !transform-none" src="/img/portfolio/p19.png">
    </div>
    <div class="w-[200px] flex flex-col gap-2 flex-shrink-0">
      <img class="w-full !transform-none" src="/img/portfolio/p05.png">
      <img class="w-full !transform-none" src="/img/portfolio/p20.png">
    </div>
    <div class="w-[200px] flex flex-col gap-2 flex-shrink-0">
      <img class="w-full !transform-none" src="/img/portfolio/p06.png">
      <img class="w-full !transform-none" src="/img/portfolio/p21.png">
    </div>
    <div class="w-[200px] flex flex-col gap-2 flex-shrink-0">
      <img class="w-full !transform-none" src="/img/portfolio/p07.png">
      <img class="w-full !transform-none" src="/img/portfolio/p22.png">
    </div>
    <div class="w-[200px] flex flex-col gap-2 flex-shrink-0">
      <img class="w-full !transform-none" src="/img/portfolio/p08.png">
      <img class="w-full !transform-none" src="/img/portfolio/p23.png">
    </div>
    <div class="w-[200px] flex flex-col gap-2 flex-shrink-0">
      <img class="w-full !transform-none" src="/img/portfolio/p09.png">
      <img class="w-full !transform-none" src="/img/portfolio/p24.png">
    </div>
  </div>
</template>

<style>
  #portfolio::-webkit-scrollbar {
    /*height: 8px; !* 스크롤바 높이 *!*/
    position: relative;
    bottom: 10px;
  }

  #portfolio::-webkit-scrollbar-track {
    background: #eee; /* 트랙을 투명하게 */
    margin-top: 10px; /* 트랙을 위로 올림 */
  }

  #portfolio::-webkit-scrollbar-thumb {
    background-color: rgba(114, 122, 122, 0.5); /* 스크롤바 색상 */
    border-radius: 10px; /* 둥근 모서리 */
    opacity: 0.5;
  }

  #portfolio::-webkit-scrollbar-thumb:hover {
    background-color: rgba(114, 122, 122, 1); /* hover 시 색상 변화 */
  }
</style>
