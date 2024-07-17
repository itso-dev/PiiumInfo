<template>
  <TextClipMask />
  <Gasp />
  <Net />
  <Slide />
  <section class="box-border px-5 bg-[#EEEEF3] py-[80px] flex justify-center items-center">
    <div class="max-w-[1200px] w-full flex flex-col md:flex-row gap-5 md:gap-0 justify-center items-center md:items-start">
      <div class="w-full flex flex-col text-center md:items-start md:w-[320px]">
        <p class="text-[#222] text-[40px] leading-[52px] tracking-[1px] font-semibold">Contact</p>
        <p class="text-[#222] text-xl leading-[46px] tracking-[-0.6px] font-semibold">문의하기</p>
      </div>
      <div class="w-full mo:w-4/5 md:w-[calc(100%_-_320px)] bg-[#FFF] flex flex-col box-border px-5 mo:px-10 py-[30px] mo:py-[50px] gap-[25px] md:gap-[30px]">
        <div class="flex flex-col gap-2.5">
          <div class="flex items-center gap-5">
            <b class="text-[#222] text-base font-semibold tracking-[-0.4px]">유형</b>
            <p class="text-[#767676] text-sm leading-5 tracking-[-0.35px]">문의 유형은 복수선택 가능합니다.</p>
          </div>
          <div class="w-full flex items-center gap-2.5 md:gap-4 flex-wrap">
            <label v-for="category in categories" :key="category.name"
              :class="[
                'box-border p-2.5 md:px-4 md:py-3 text-base border flex items-center gap-2 border-[#C5C6CC]',
                { 'bg-[#546AB8] border-[#546AB8] text-[#FFF]': selectedCategory.includes(category.name) }
              ]">
              <input type="checkbox" class="square-check" :value="category.name"
                v-model="selectedCategory"/>
              {{ category.label }}
            </label>
          </div>
        </div>
        
        <div class="w-full flex flex-col gap-[25px] md:flex-row md:gap-10 items-center">
          <Input
            title="기업명" class="w-full md:w-1/2"
            :data="this.business_name" ref="select"
            @update="this.updateBusinesName" type="text"
            minLength="2" placeholder="기업명"
          />
          <Input
            title="담당자 성함" class="w-full md:w-1/2"
            :data="this.manager_name" ref="select"
            @update="this.updateManagerName" type="text"
            minLength="2" placeholder="ex)홍길동"
          />
        </div>
        <div class="w-full flex flex-col gap-[25px] md:flex-row md:gap-10 items-center">
          <Input
            title="연락드릴 휴대폰번호" class="w-full md:w-1/2"
            :data="this.phone" ref="select"
            @update="this.updatePhone" type="text"
            minLength="2" placeholder="ex) 01012345678"
          />
          <Input
            title="연락드릴 이메일" class="w-full md:w-1/2"
            :data="this.email" ref="select"
            @update="this.updateManagerName" type="text"
            minLength="2" placeholder="sample@gmail.com"
          />
        </div>
        <Input
          type="textarea" :data="this.content"
          title="문의 내용" placeholder="문의 내용을 작성해주세요." @update="this.updateContent"
        />
        <div class="flex flex-col gap-3 lg:flex-row lg:justify-between lg:items-center">
          <div class="w-full flex gap-3 items-center">
            <label class="checkbox-label">
              <input type="checkbox" class="round-check"  id="agree" name="agree" v-model="this.agree" required/>
            </label>
            <label class="text-[#111] text-[15px] leading-[22px] tracking-[-0.375px] flex justify-center items-center">
              <span class="cursor-pointer font-bold underline" @click="openAgree">개인정보처리방침</span> 에 동의</label>
          </div>
          <span class="w-full lg:w-[160px] flex py-[14px] justify-center items-center bg-[#222] text-[#FFF] text-xl leading-7 font-bold tracking-[-0.5px] border-none cursor-pointer hover:bg-[#2A5200]"
            @click="this.contactSubmitForm()">문의하기</span>
        </div>
      </div>
    </div>
  </section>

  <article class="agreeModal left-0 mi:max-w-[1080px] w-full h-screen bg-[#FFF] box-border pt-[60px] px-5 mo:px-12 pb-5 fixed top-0 mi:left-[50%] mi:translate-x-[-50%] z-50 flex flex-col gap-5 justify-center items-center" v-if="this.agreeModal">
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
    <div class="text-sm tracking-[-0.35px] text-[#505050] text-left mo:text-base mo:break-keep overflow-scroll">
      프로젝트서티즈 (이하 “회사”)는 「개인정보보호법」, 「정보통신망 이용촉진
      및 정보보호 등에 관한 법률」(이하 “정보통신망법”) , 「위치정보의 보호 및
      이용 등에 관한 법률」(이하 “위치정보법”) 등 관련 법령상의 개인정보
      보호규정을 준수하며, 개인정보보호법에 의거한 개인정보처리방침을 정하여
      이용자 권익 보호에 최선을 다하고 있습니다. 본 개인정보처리방침은 회사가
      제공하는 웹서비스에 적용되며 다음과 같은 내용을 포함하고 있습니다.<br />
      <br />
      1. 개인정보 수집 및 이용 현황 <br />
      가. 회사는 서비스 제공을 위한 최소한의 범위 내에서 이용자의 동의 하에
      개인정보를 수집하며, 수집한 모든 개인정보는 고지한 목적 범위 내에서만
      사용됩니다. 또한, 제공하는 서비스(채용 정보제공 등) 특성상
      「근로기준법」에 따라 만15세 미만인 경우 회원가입을 허용하지 않습니다.
      회사에서 제공하는 서비스 유형에 따라 다음과 같이 개인정보를 수집, 이용,
      보유 및 파기하고 있습니다. [ 서비스 이용에 따른 자동 수집 및 생성 정보
      ]<br />
      <br />
      2. 개인정보 제3자 제공<br />
      회사는「1. 개인정보 수집 및 이용 현황」에서 고지한 범위 내에서만
      개인정보를 이용하며, 원칙적으로 이용자의 개인정보를 제3자에게 제공하지
      않습니다. 다만, 아래의 경우에는 예외로 합니다. <br />
      가. 이용자가 서비스 이용중 제3자 제공에 동의(수락)한 경우<br />
      나. 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에
      따라 수사기관의 요구가 있는 경우<br />
      귀하께서는 개인정보의 제3자 제공에 대해, 동의하지 않을 수 있고 언제든지
      제3자 제공 동의를 철회할 수 있습니다. 다만, 제3자 제공에 기반한 관련된
      일부 서비스의 이용이 제한될 수 있습니다.(회원가입 서비스는 이용하실 수
      있습니다.)<br />
      <br />
      3. 개인정보 처리위탁<br />
      회사는 개인정보의 처리와 관련하여 아래와 같이 업무를 위탁하고 있으며,
      관계법령에 따라 위탁 처리되는 개인정보가 안전하게 관리될 수 있도록 필요한
      조치를 취하고 있습니다. 또한 위탁 처리하는 정보는 서비스 제공에 필요한
      최소한의 범위에 국한됩니다. 회사에서 위탁처리 되고 있는 업무는 다음과
      같고, 위탁사항이 변경되는 경우 해당 사실을 알려드리겠습니다.<br />
      <br />
      4. 개인정보 보유 및 이용기간<br />
      회사는 이용자의 개인정보를 고지 및 동의 받은 사항에 따라 수집∙이용 목적이
      달성되기 전 또는 이용자의 탈퇴 요청이 있기 전까지 해당 정보를 보유합니다.
      다만, 아래의 사유로 인하여 보관이 필요한 경우 외부와 차단된 별도 DB 또는
      테이블에 분리 보관 됩니다.<br />
      가. 관련 법령에 의한 개인정보 보유<br />
      1) 통신비밀보호법<br />
      · 서비스 이용기록, 접속로그, 접속IP정보 : 3개월<br />
      2) 전자상거래 등에서의 소비자보호에 관한 법률<br />
      · 표시∙광고에 관한 기록 : 6개월<br />
      · 계약 또는 청약철회 등에 관한 기록 : 5년<br />
      · 대금결제 및 재화등의 공급에 관한 기록 : 5년<br />
      · 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년<br />
      3) 부가가치세법<br />
      · 세금계산서, 영수증 등 거래내역 관련 정보 : 5년<br />
      <br />
      5. 개인정보 파기절차 및 방법<br />
      이용자의 개인정보는 원칙적으로 개인정보 수집 및 이용목적이 달성되면
      지체없이 파기 합니다. 다만, 다른 법령에 의해 보관해야 하는 정보는 법령이
      정한 기간 동안 별도 분리보관 후 파기합니다.<br />
      가. 파기절차 및 기한<br />
      · 수집·이용목적이 달성된 개인정보는 지체없이 파기되며, 관련 법령에 따라
      보관되어야 할 경우 별도의 DB에 옮겨져 내부 규정 및 관련 법령을 준수하여
      일정기간동안 안전하게 보관된 후 지체없이 파기됩니다. 이때, DB로 옮겨진
      개인정보는 법률에 의한 경우를 제외하고 다른 목적으로 이용하지 않습니다.<br />
      나. 파기방법<br />
      · 전자적 파일 형태의 정보는 복구 및 재생할 수 없는 기술적 방법을 사용하여
      완전하게 삭제합니다.<br />
      · 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여
      파기합니다.<br />
      <br />
      6. 이용자 권리 및 행사방법<br />
      이용자는 정보주체로서 홈페이지를 통해 언제든지 아래의 권리를 행사할 수
      있으며, 회사는 관련된 상담 및 문의 처리를 위해 별도의 고객센터를 운영하고
      있습니다.<br />
      <br />
      7. 자동 수집되는 개인정보 및 거부에 관한 사항<br />
      회사는 이용자 맞춤서비스를 제공하기 위하여 쿠키(cookie)를 설치 및
      운영합니다. 쿠키의 사용 목적과 거부에 관한 사항은 아래와 같습니다.<br />
      가. 쿠키란?<br />
      쿠키는 웹사이트를 운영하는데 이용되는 서버가 이용자의 브라우저에 보내는
      아주 작은 텍스트 파일로서 이용자의 컴퓨터에 저장되어 운영됩니다.<br />
      나. 쿠키의 사용 목적<br />
      이용자들의 접속관리, 이용자별 사용 환경 제공, 이용자 활동정보 파악, 이벤트
      및 프로모션 통계를 파악하여 최적화된 맞춤형 서비스를 제공하기 위해
      사용합니다.<br />
      다. 쿠키의 설치·운영 및 거부<br />
      서비스를 이용함에 있어 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다.
      이용자는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용 또는 거부
      하거나, 쿠키가 저장될 때마다 확인을 거치도록 할 수 있습니다. 쿠키 설치
      허용 여부를 지정하는 방법은 다음과 같습니다.<br />
      · Internet Explorer : 웹 브라우저 상단 도구 메뉴 > 인터넷 옵션 > 개인정보
      > 개인정보처리 수준 설정<br />
      · Chrome : 웹 브라우저 우측 설정 메뉴 > 도구 > 인터넷 사용기록 삭제<br />
      <br />
      8. 개인정보의 보호조치에 관한 사항<br />
      회사는 이용자의 개인정보가 분실, 도난, 유출, 위∙변조 또는 훼손되지 않도록
      안전성 확보를 위하여 정보통신망법, 개인정보보호법 등 정보통신서비스
      제공자가 준수하여야 할 관련 법령에 따라 기술적∙관리적 보호조치를 적정하게
      취하고 있습니다.<br />
      가. 기술적 대책<br />
      · 고객의 개인정보는 비밀번호에 의해 보호되며 파일 및 전송데이터를
      암호화하거나 파일 잠금기능(Lock)을 사용하여 중요한 데이터는 별도의
      보안기능을 통해 보호되고 있습니다.<br />
      · 회사는 백신프로그램을 이용하여 컴퓨터바이러스에 의한 피해를 방지하기
      위한 조치를 취하고 있습니다. 백신프로그램은 주기적으로 업데이트되며
      갑작스런 바이러스가 출현할 경우 백신이 나오는 즉시 이를 제공함으로써
      개인정보가 침해되는 것을 방지하고 있습니다.<br />
      · 회사는 네트워크 상의 개인정보를 안전하게 전송할 수 있는 전송구간
      암호화(SSL)를 통해 전송하고 있습니다.<br />
      · 해킹 등 외부침입에 대비하여 침입차단시스템 등을 이용하여 보안에 만전을
      기하고 있습니다.<br />
      나. 관리적 대책<br />
      · 회사는 개인정보 취급자를 최소한의 인원으로 제한하며, 개인정보를 처리하는
      직원을 대상으로 새로운 보안 기술 습득 및 개인정보 보호 의무 등에 관해
      정기적인 교육을 실시하고 있습니다.<br />
      · 입사 시 전 직원의 보안서약서를 통하여 사람에 의한 정보유출을 사전에
      방지하고 개인정보처리방침에 대한 이행사항 및 직원의 준수여부를 감시하기
      위한 내부절차를 마련하고 있습니다.<br />
      · 개인정보취급자의 업무 인수인계는 보안이 유지된 상태에서 철저하게
      이뤄지고 있으며 입사 및 퇴사 후 개인정보 사고에 대한 책임을 명확히 하고
      있습니다.<br />
      · 전산실 및 자료 보관실 등을 특별 보호구역으로 설정하여 출입을 통제하고
      있습니다.<br />
      · 그 외 내부 관리자의 실수나 기술관리 상의 사고로 인해 개인정보의 분실,
      도난, 유출, 위∙변조 또는 훼손될 경우 회사는 즉각 이용자에게 사실을 알리고
      적절한 대책과 보상을 강구할 것입니다.<br />
      <br />
      9. 개인정보 보호책임자 연락처 및 이용자 고충 처리<br />
      회사의 서비스를 이용하시면서 발생한 모든 개인정보보호 관련 민원, 불만처리
      등에 관한 사항을 개인정보 보호책임자 및 고객센터로 문의하실 수 있고,
      회사는 이용자의 문의에 신속하고 성실하게 답변하겠습니다.<br />
      <br />
      10. 기타 이 개인정보 처리방침은 시행일로부터 적용되며, 관련 법령 및 회사
      정책변경 등에 따른 변경 내용의 추가, 삭제 및 정정사항이 있는 경우에는
      홈페이지 또는 이메일을 통해 사전 공지하겠습니다.<br />
      · 개인정보 처리방침 시행일자 : 2024년 01월 10일
    </div>
  </article>

  <div class="fixed top-0 left-0 w-full h-full bg-[#000] opacity-60 z-40" v-if="this.modalBg"></div>

</template>

<script>
import TextClipMask from "@/components/TextClipMask.vue";
import Gasp from "@/components/Gasp.vue";
import Net from "@/components/Net.vue";
import Slide from "@/components/Slide.vue";
import Input from "@/components/Input.vue";

export default {
  setup() {},
  components: {
    TextClipMask,
    Gasp,
    Net,
    Slide,
    Input,
  },
  data() {
    return {
      business_name: "",
      manager_name: "",
      phone: "",
      email: "",
      content: "",
      agreeModal: false,
      modalBg: false,
      agree: false,
      selectedCategory: [],
      categories: [
        { name: 'branding', label: '브랜딩' },
        { name: 'marketing', label: '마케팅' },
        { name: 'sales', label: '대행판매' },
        { name: 'development', label: '웹∙앱개발' },
        { name: 'alliance', label: '제휴' },
        { name: 'etc', label: '기타' }
      ],
    };
  },
  methods: {
    openAgree() {
      this.agreeModal = true;
      this.modalBg = true;
    },
    closeAgree() {
      this.agreeModal = false;
      this.modalBg = false;
    },
    updateBusinesName(data) {
      this.business_name = data;
    },
    updateManagerName(data) {
      this.manager_name = data;
    },
    updatePhone(data) {
      this.phone = data;
    },
    updateEmail(data) {
      this.email = data;
    },
    updateContent(data) {
      this.content = data;
    },
  },
  computed: {},
  mounted() {},
};
</script>
