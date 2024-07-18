<template>
  <div class="net-page overflow-hidden relative bg-[#FFF] px-5 py-[70px] mo:pt-[98px] mo:pb-0 flex flex-col gap-[65px] mo:gap-[80px] justify-centet items-center">
    <img src="/icons/net.png" class="absolute max-w-none w-[400%] mo:w-[200%] md:w-[80%] px-auto top-0 z-10">
    <div class="flex flex-col gap-10 items-center z-20">
      <p data-aos="zoom-out" data-aos-delay="200" class="text-[#111] text-2xl leading-[34px] tracking-[-0.6px] mo:text-[40px] mo:leading-[52px] mo:tracking-[-1px] text-center">누구 하나 소외 당하는 사람이<br class="md:hidden"> 없는 세상을 위해,<br>
        <span class="text-[32px] leading-[42px] tracking-[-0.8px] font-bold mo:text-[40px] mo:leading-[52px] mo:tracking-[-1px]">자립환경 개선을 위한 교육</span></p>
      <p data-aos="fade-up" data-aos-delay="200" class="text-base text-rgba(34,34,34,0.80) mo:text-xl mo:tracking-[-0.5px] text-center">취업취약계층의 자립환경 구축을 위하여,<br>
        시∙공간의 제약이 적은 디지털 업무들을 교육하고<br class="mo:hidden"> 취업 및 창업을 돕습니다.</p>
    </div>
    <div class="max-w-[1200px] w-full flex flex-col z-20 md:flex-row">
        <div class="w-full md:w-1/2 h-[300px] mo:h-[400px] md:h-[510px] px-5 mo:pl-10 pb-[30px] mo:pb-[60px] flex items-end !bg-cover !bg-center" style="background: url('/icons/edu.png');">
            <div class="flex flex-col items-start lg:items-center gap-5 lg:flex-row">
                <b class="text-[#FFF] text-[32px] leading-7 tracking-[-0.8px]">교육</b>
                <div class="flex items-center gap-2.5 flex-wrap">
                    <p class="box-border py-[5px] px-2.5 rounded-[50px] bg-[rgba(255,255,255,0.20)] text-[#FFF] text-[18px] leading-6 tracking-[-0.45px] mo:text-lg mo:leading-[26px] mo:tracking-[-0.45px]">노코딩 툴 활용</p>
                    <p class="box-border py-[5px] px-2.5 rounded-[50px] bg-[rgba(255,255,255,0.20)] text-[#FFF] text-[18px] leading-6 tracking-[-0.45px] mo:text-lg mo:leading-[26px] mo:tracking-[-0.45px]">디지털 셀러</p>
                    <p class="box-border py-[5px] px-2.5 rounded-[50px] bg-[rgba(255,255,255,0.20)] text-[#FFF] text-[18px] leading-6 tracking-[-0.45px] mo:text-lg mo:leading-[26px] mo:tracking-[-0.45px]">자립환경 개선</p>
                </div>
            </div>
        </div>
        <div class="w-full md:w-1/2 h-[300px] mo:h-[400px] md:h-[510px] px-5 mo:pl-10 pb-[30px] mo:pb-[60px] flex items-end !bg-cover !bg-center" style="background: url('/icons/found.png');">
            <div class="flex flex-col items-start lg:items-center gap-5 lg:flex-row">
                <b class="text-[#FFF] text-[32px] leading-7 tracking-[-0.8px]">취업∙창업</b>
                <div class="flex items-center gap-2.5">
                    <p class="box-border py-[5px] px-2.5 rounded-[50px] bg-[rgba(255,255,255,0.20)] text-[#FFF] text-[18px] leading-6 tracking-[-0.45px] mo:text-lg mo:leading-[26px] mo:tracking-[-0.45px]">일자리 연계</p>
                    <p class="box-border py-[5px] px-2.5 rounded-[50px] bg-[rgba(255,255,255,0.20)] text-[#FFF] text-[18px] leading-6 tracking-[-0.45px] mo:text-lg mo:leading-[26px] mo:tracking-[-0.45px]">창업지원</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  setup(props) {
    return {
    };
  },
  components: {
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  created() {
  },
  mounted() {
  },
};

</script>
