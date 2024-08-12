<template>
  <main class="main2">
    <div class="grid-container">
      <div class="grid">
        <div class="gridLayer">
          <div class="gridBlock"></div>
        </div>
        <div class="gridLayer">
          <div class="gridBlock">
            <div class="marquee2">
              <div class="marquee-content">
                <img src="/icons/partner/partner.png" />
                <img src="/icons/partner/partner2.png" />
                <img src="/icons/partner/partner3.png"/>
                <img src="/icons/partner/partner4.png" />
                <img src="/icons/partner/partner5.png"/>
              </div>
            </div>
          </div>
        </div>
        <div class="gridLayer">
          <div class="gridBlock">
            <div class="box-div">
              <p class="box-tit w">브랜딩</p>
              <div class="box-wrap">
                <p>컨설팅</p>
                <p>CI/BI</p>
                <p>브랜드 가이드</p>
                <p>패키지 디자인</p>
              </div>
            </div>
          </div>
        </div>
        <div class="gridLayer centerPiece" :class="{ expanded: isExpanded }">
          <div class="gridBlock centerBlock">
            <img src="/icons/pg2-bg.png" ref="mainVideo">
            <div class="centerText2">
              <div class="text-div">
                <p><span>사회적경제 기업 ∙<br> 협동 조합</span>을 위한<br> 기업입니다.</p>
                <p>비영리단체와 사회적경제 기업 ∙ 협동<br class="block md:hidden"> 조합을 위해 <span>브랜딩 ∙ 마케팅 ∙ 대행판매</span><br class="hidden xl:block"> 등으로 매출 개선에 이바지 합니다.</p>
              </div>
            </div>
          </div>
          <div class="centerText">
            우리는 브랜딩 및 마케팅의<br class="lg:hidden" />
            디지털 업무를 취약계층과 나누어,<br />
            그들이 자립할 수 있는 환경을 만듭니다.
          </div>
        </div>
        <div class="gridLayer">
          <div class="gridBlock">
            <video loop="loop" muted="muted" autoplay="autoplay" playsinline>
              <source src="/icons/webapp.mp4" type="video/mp4" />
            </video>
            <div class="box-div">
              <p class="box-tit b">웹∙앱개발</p>
              <div class="box-wrap2">
                <p>홈페이지</p>
                <p>랜딩페이지</p>
                <p>서비스 개발</p>
              </div>
            </div>
          </div>
        </div>
        <div class="gridLayer">
          <div class="gridBlock">
            <video loop="loop" muted="muted" autoplay="autoplay" playsinline>
              <source src="/icons/influencer.mp4" type="video/mp4" />
            </video>
            <div class="box-div">
              <p class="box-tit b">대행판매</p>
              <div class="box-wrap2">
                <p class="w">셀러 위탁 판매</p>
                <p class="w">인플루언서<br class="lg:hidden"> 공동구매</p>
              </div>
            </div>
          </div>
        </div>
        <div class="gridLayer">
          <div class="gridBlock">
            <div class="box-div">
              <p class="box-tit w">마케팅</p>
              <div class="box-wrap">
                <p>E-Commerce</p>
                <p>SNS</p>
                <p>검색광고</p>
                <p>크라우드 펀딩</p>
                <p>콘텐츠 제작</p>
              </div>
            </div>
          </div>
        </div>
        <div class="gridLayer">
          <div class="gridBlock"></div>
        </div>
        <div v-if="!isExpanded" class="marquee">
          <div class="marquee-content">
            <b class="m1">PROJECT 30’s</b>
            <img src="/icons/marquee.png" class="m2" />

            <b class="m1">PROJECT 30’s</b>
            <img src="/icons/marquee.png" class="m2" />

            <b class="m1">PROJECT 30’s</b>
            <img src="/icons/marquee.png" class="m2" />

            <b class="m1">PROJECT 30’s</b>
            <img src="/icons/marquee.png" class="m2" />
          </div>
        </div>
      </div>
    </div>
  </main>

  <section class="mo-page">
    <article class="mo-page-1">
      <img src="/icons/pg2-bg.png">
      <div class="centerText">
        우리는 브랜딩 및 마케팅의<br class="xl:hidden" />
        디지털 업무를 취약계층과 나누어,<br/>
        그들이 자립할 수 있는 환경을<br class="mo:hidden"/> 만듭니다.
      </div>
      <div class="marquee">
        <div class="marquee-content">
          <b class="m1">PROJECT 30’s</b>
          <img src="/icons/marquee.png" class="m2" />
          <b class="m1">PROJECT 30’s</b>
          <img src="/icons/marquee.png" class="m2" />
          <b class="m1">PROJECT 30’s</b>
          <img src="/icons/marquee.png" class="m2" />
          <b class="m1">PROJECT 30’s</b>
          <img src="/icons/marquee.png" class="m2" />
        </div>
      </div>
    </article>

    <article class="mo-page-2">
      <div class="mo-bigbox">
        <img src="/icons/pg2-bg.png">
        <p><span>사회적경제 기업 ∙<br> 협동 조합</span>을 위한<br class="mo:hidden"> 기업입니다.</p>
        <p>비영리단체와 사회적경제 기업 ∙ 협동<br class="mo-br"> 조합을 위해<br class="hidden mo:block"> <span>브랜딩 ∙ 마케팅 ∙ 대행판매</span> 등으로<br class="hidden min-w-[480px]:block mo:hidden"> 매출 개선에 이바지 합니다.</p>
      </div>
      <div class="mo-box">
        <div class="box-div">
          <p class="box-tit w">브랜딩</p>
          <div class="box-wrap">
            <p>컨설팅</p>
            <p>CI/BI</p>
            <p>브랜드 가이드</p>
            <p>패키지 디자인</p>
          </div>
        </div>
      </div>
      <div class="mo-box">
        <div class="box-div">
          <p class="box-tit w">마케팅</p>
          <div class="box-wrap">
            <p>E-Commerce</p>
            <p>SNS</p>
            <p>검색광고</p>
            <p>크라우드 펀딩</p>
            <p>콘텐츠 제작</p>
          </div>
        </div>
      </div>
      <div class="mo-box">
        <video loop="loop" muted="muted" autoplay="autoplay" playsinline>
          <source src="/icons/influencer.mp4" type="video/mp4" />
        </video>
        <div class="box-div">
          <p class="box-tit b">대행판매</p>
          <div class="box-wrap2">
            <p class="w">셀러 위탁 판매</p>
            <p class="w">인플루언서 공동구매</p>
          </div>
        </div>
      </div>
      <div class="mo-box">
        <video loop="loop" muted="muted" autoplay="autoplay" playsinline>
          <source src="/icons/webapp.mp4" type="video/mp4" />
        </video>
        <div class="box-div">
          <p class="box-tit b">웹∙앱개발</p>
          <div class="box-wrap2">
            <p>홈페이지</p>
            <p>랜딩페이지</p>
            <p>서비스 개발</p>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  setup() {
    const isExpanded = ref(false);
    const mainVideo = ref(null);

    // 기본 scale 값
    let scaleValue = 5.3333;

    // 해상도가 1800px 이상인 경우 scale 값을 더 크게 설정
    if (window.matchMedia("(min-width: 1800px)").matches) {
      scaleValue = 7.5; // 원하는 scale 값으로 설정
    }

    onMounted(() => {
      // GSAP 기본 설정
      gsap.registerPlugin(ScrollTrigger);

      // ScrollTrigger를 사용하여 애니메이션 적용
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".grid-container",
          start: "top top",
          end: () => window.innerHeight * 4,
          scrub: true,
          pin: ".grid",
          anticipatePin: 1,
        },
      });

      // 다른 요소의 기본 애니메이션
      timeline
        .set(".gridBlock:not(.centerBlock)", { autoAlpha: 0 })
        .to(".gridBlock:not(.centerBlock)", { duration: 0.1, autoAlpha: 1 }, 0.001)
        .to(".centerText, .marquee", { autoAlpha: 0, duration: 0.5, ease: "none" }, 0.5)
        .from(".gridLayer", {
          scale: scaleValue,
          ease: "none",
        })
        .to(".centerText2", { autoAlpha: 1, duration: 0.5, ease: "none" }, 0.5);

        // 클래스 토글링
        gsap.to(mainVideo.value, {
          scrollTrigger: {
            trigger: ".grid-container",
            start: "top+=1000px top",
            toggleClass: { targets: mainVideo.value, className: "absolute-video" },
            scrub: true,
          },
        });
    });

    return { isExpanded, mainVideo };
  },
};
</script>
