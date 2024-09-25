<template>
  <div class="bg-[#111] w-full">
    <div class="marquee-wrapper overflow-hidden py-10 border-b border-[rgba(255,255,255,0.15)] max-lg:py-8">
      <div class="marquee-text">
        <p class="text-8xl text-white pr-32 max-lg:text-5xl">피움은 단순히 홈페이지를 만드는 것 이상을 제안합니다.</p>
        <p class="text-8xl text-white pr-32 max-lg:text-5xl">피움은 단순히 홈페이지를 만드는 것 이상을 제안합니다.</p>
        <p class="text-8xl text-white pr-32 max-lg:text-5xl">피움은 단순히 홈페이지를 만드는 것 이상을 제안합니다.</p>
        <p class="text-8xl text-white pr-32 max-lg:text-5xl">피움은 단순히 홈페이지를 만드는 것 이상을 제안합니다.</p>
      </div>
    </div>
    <div class="flex justify-between items-end py-14 px-16 max-lg:py-10 max-lg:px-10 max-md:py-6 max-md:px-6 max-sm:flex-wrap max-sm:justify-center">
      <div class="text-base text-white text-left max-md:w-full">
        <span class="opacity-60 mr-5 hover:text-[#FFB948] hover:opacity-100 cursor-pointer">개인정보처리방침</span>
        <span class="opacity-60 mr-5 hover:text-[#FFB948] hover:opacity-100 cursor-pointer">회사소개서다운로드
          <svg class="relative bottom-1 inline" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M14 4.375C13.6281 4.375 13.3437 4.65937 13.3437 5.03125V17.8938L10.0844 14.6344C9.82186 14.3719 9.40624 14.3719 9.16561 14.6344C8.90311 14.8969 8.90311 15.3125 9.16561 15.5531L13.5406 19.9281C13.6719 20.0594 13.8469 20.125 14 20.125C14.1531 20.125 14.3281 20.0594 14.4594 19.9281L18.8344 15.5531C19.0969 15.2906 19.0969 14.875 18.8344 14.6344C18.5719 14.3719 18.1562 14.3719 17.9156 14.6344L14.6562 17.8938V5.03125C14.6562 4.65937 14.3719 4.375 14 4.375ZM21.4812 24.8937C21.4812 24.5219 21.1969 24.2375 20.825 24.2375H7.17499C6.80311 24.2375 6.51874 24.5219 6.51874 24.8937C6.51874 25.2656 6.80311 25.55 7.17499 25.55H20.825C21.1969 25.55 21.4812 25.2437 21.4812 24.8937Z" fill="white"/>
          </svg>
        </span>
        <p class="mt-5 mb-2"><strong class="mr-0.5">대표이사</strong> 이해강</p>
        <p class="mb-2"><strong class="mr-0.5">이메일</strong> info@piium.co.kr <span class="relative bottom-[1.5px] opacity-60 mx-1 max-md:invisible max-md:block">|</span><strong class="mr-0.5">연락처</strong> 070-5151-9934</p>
        <p class="mb-2"><strong class="mr-0.5">사업자등록번호</strong> 632-81-03346 <span class="relative bottom-[1.5px] opacity-60 mx-1 max-md:invisible max-md:block">|</span><strong class="mr-0.5">통신판매업신고번호</strong> 2024-서울마포-1596</p>
        <p class="mt-5 mb-4"><strong class="mr-0.5">주소</strong> 서울특별시 마포구 서강대길 22 피움</p>
        <p class="opacity-60">©2024. 피움코퍼레이션(주) All Rights Reserved </p>
      </div>
      <div class="cursor-pointer max-md:w-[100px] max-md:text-center max-md:mt-14" @click="scrollTop">
        <svg class="max-md:inline" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
          <path d="M40 12.25L38.85 13.35L21.45 30.8C20.975 31.1875 20.7563 31.8062 20.8938 32.4062C21.0313 33 21.5 33.4688 22.0938 33.6063C22.6938 33.7438 23.3125 33.525 23.7 33.05L38.4 18.35V65.6C38.3938 66.175 38.6938 66.7125 39.1938 67.0063C39.6938 67.2938 40.3063 67.2938 40.8063 67.0063C41.3063 66.7125 41.6063 66.175 41.6 65.6V18.35L56.3 33.05C56.6875 33.525 57.3063 33.7438 57.9063 33.6063C58.5 33.4688 58.9688 33 59.1063 32.4062C59.2438 31.8062 59.025 31.1875 58.55 30.8L41.15 13.35L40 12.25Z" fill="white" fill-opacity="0.3"/>
        </svg>
        <p class="text-base text-white">Back to Top</p>
      </div>
    </div>
  </div>
</template>

<style>
/* 컨테이너가 overflow를 감싸서 보이지 않게 */
.marquee-wrapper {
  white-space: nowrap;
  width: 100%;
}

/* 텍스트가 흐르는 영역 */
.marquee-text {
  display: inline-flex;
  animation: marquee 15s linear infinite;
  white-space: nowrap;
  width: 200%; /* 컨텐츠의 두 배 길이를 확보 */
}

.marquee-text p {
  display: inline-block;
  white-space: nowrap;
}

/* 애니메이션 키프레임 정의 */
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>

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
