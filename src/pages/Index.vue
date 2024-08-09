<template>
  <TextClipMask />
  <Gasp />
  <Net />
  <Slide />
  <section class="box-border px-5 bg-[#EEEEF3] py-[80px] flex justify-center items-center">
    <div class="max-w-[1200px] w-full flex flex-col md:flex-row gap-5 md:gap-0 justify-center items-center md:items-start">
      <div class="w-full flex flex-col text-center md:items-start md:w-[320px]" data-aos="fade-up" data-aos-delay="200">
        <p class="text-[#222] text-[40px] leading-[52px] tracking-[1px] font-semibold">Contact</p>
        <p class="text-[#222] text-xl leading-[46px] tracking-[-0.6px] font-semibold">문의하기</p>
      </div>
      <div class="w-full mo:w-4/5 md:w-[calc(100%_-_320px)] bg-[#FFF] flex flex-col box-border px-5 mo:px-10 py-[30px] mo:py-[50px] gap-[25px] md:gap-[30px]" data-aos="fade-up" data-aos-delay="400">
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
            @update="this.updateBusinessName" type="text"
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
            @update="this.updateEmail" type="text"
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
    <Privacy />
  </article>

  <div class="fixed top-0 left-0 w-full h-full bg-[#000] opacity-60 z-40" v-if="this.modalBg"></div>

</template>

<script>
import TextClipMask from "@/components/TextClipMask.vue";
import Gasp from "@/components/Gasp.vue";
import Net from "@/components/Net.vue";
import Slide from "@/components/Slide.vue";
import Input from "@/components/Input.vue";
import Privacy from "@/components/Privacy.vue";
import AOS from 'aos';
import "aos/dist/aos.css";

export default {
  setup() {},
  components: {
    TextClipMask,
    Gasp,
    Net,
    Slide,
    Input,
    Privacy
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
        { name: 'branding', label: '브랜딩', value: '1'},
        { name: 'marketing', label: '마케팅', value: '2' },
        { name: 'sales', label: '대행판매', value: '3' },
        { name: 'development', label: '웹∙앱개발', value: '4' },
        { name: 'alliance', label: '제휴', value: '5' },
        { name: 'etc', label: '기타', value: '6' }
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
    updateBusinessName(data) {
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
    async contactSubmitForm() {
      // 폼 데이터 가져오기


      if(this.selectedCategory == ''){
        alert("문의 타입을 선택해주세요.")
        return false;
      } else if(this.business_name == ''){
        alert("기업명을 입력해주세요.")
        return false;
      } else if(this.manager_name == ''){
        alert("담당자 성함을 입력해주세요.")
        return false;
      } else if(this.phone == ''){
        alert("휴대폰 번호를 입력해주세요.")
        return false;
      } else if(this.email == ''){
        alert("이메일을 입력해주세요.")
        return false;
      } else if(this.content == ''){
        alert("문의 내용을 선택해주세요.")
        return false;
      } else if (!this.agree){
        alert("개인정보처리방침에 동의해주세요.")
      }
      const url = "https://api.nopi.io/inquiry/save";
      const data = {
        "type_list": JSON.stringify(this.selectedCategory),
        "site_type": 2,
        "name": this.manager_name,
        "company_name": this.business_name,
        "phone_number": this.phone,
        "email": this.email,
        "content": this.content
      };
      console.log(data);
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          const jsonResponse = await response.json();
          console.log(jsonResponse); // 서버로부터 받은 응답 데이터 확인
          alert("문의가 등록되었습니다.");
          location.href="/";
        } else {
          console.log('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  },
  computed: {},
  created() {
    AOS.init();
  },
  mounted() {
    AOS.refresh();
  },
};
</script>
