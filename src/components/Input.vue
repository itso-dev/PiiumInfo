<template>
  <div :class="'w-[' + this.s_width + '] min-w-[' + this.s_min + '] max-w-[' + this.s_max + ']'" class="relative">
    <!-- TITLE -->
    <p v-if="this.title" class="mb-2.5 text-base text-[#222] leading-5 text-left font-semibold">
      {{ this.title }}
      <span v-if="this.isLength">
        (<b :class="[this.input_data.length > 0 ? 'text-primary' : 'text-red']">{{ this.input_data.length }}</b
        >/{{ this.maxLength }})
      </span>
    </p>
    <p v-if="this.option" class="absolute right-0 top-0 font-normal text-[#999] text-xs">선택사항</p>
    <!-- TEXTAREA -->
    <textarea
      v-if="this.type == 'textarea'"
      :placeholder="input_placeholder"
      v-model="this.input_data"
      @input="inputUpdate()"
      :class="[this.checkColor('input'), 'textarea-wrap scroll-style']"
      :minlength="this.minLength"
      :maxlength="this.maxLength"
    ></textarea>
    <!-- 일반 입력창 -->
    <div v-else @click="this.clickFocus()" :class="[this.checkColor('input'), 'input-wrap', this.type == 'readonly_address' ? 'bg-[#f9f9f9]' : '',  this.type == 'readonly' ? 'bg-[#f9f9f9]' : '']">
      <!-- NUMBER -->
      <input
        v-if="this.type == 'number'"
        :placeholder="input_placeholder"
        type="text"
        :ref="setOtpRef"
        :disabled="this.disabled"
        v-model="this.input_data"
        @input="
          this.input_data = this.onlyNumber(this.input_data);
          inputUpdate();
        "
        :minlength="this.minLength"
        :maxlength="this.maxLength"
        class="focus-none text-sm placeholder:text-[#BDBDBD] w-full p-0"
      />
      <!-- ID +TEXT -->
      <div v-else-if="this.type == 'id'" class="flex p-0 w-full items-center">
        <p :class="[this.checkColor('linkText')]" class="text-[#BBB] text-sm">{{ this.text }}</p>
        <input :ref="setOtpRef" v-model="this.input_data" :type="this.type" :placeholder="input_placeholder" :class="['input']" @input="inputUpdate()" :disabled="this.disabled" :maxlength="this.maxLength" :minlength="this.minLength" />
      </div>
      <!-- readonly -->
      <div v-else-if="this.type == 'readonly'" class="flex p-0 w-full items-center cursor-pointer">
        <input :ref="setOtpRef" v-model="this.data" readonly type="text" :placeholder="input_placeholder" :class="['input cursor-pointer']" />
      </div>
      <!--   price   -->
      <div
        v-else-if="this.type == 'price' || this.type == 'read_only_price' || this.type == 'count'"
        :class="[this.type == 'price' || this.type == 'read_only_price' ? 'pl-5' : '', 'flex justify-between w-full gap-1 items-center cursor-pointer relative']"
      >
        <span v-if="this.type == 'price' || this.type == 'read_only_price'" class="absolute z-10 text-sm text-[#505050] left-0">￦</span>
        <!-- addComma -->
        <input
          :ref="setOtpRef"
          v-model="this.input_data"
          type="text"
          :readonly="this.type == 'read_only_price'"
          :placeholder="input_placeholder"
          :class="[this.isDiscount ? 'w-[calc(100%_-_100px)]' : '', 'input cursor-pointer']"
          @input="inputUpdate()"
          :minlength="this.minLength"
          :maxlength="this.maxLength"
        />
        <p v-if="this.isDiscount" class="flex items-center gap-1 justify-end">
          <span class="text-[#767676] text-sm font-bold whitespace-nowrap">할인비율</span>
          <span class="text-primary text-base font-bold pt-0.5">{{ this.getDiscount(this.cardStore.price, this.input_data) }}%</span>
        </p>
      </div>
       <!-- readonly_confirm : 본인인증 정보들 -->
       <div v-else-if="this.type == 'readonly_confirm'" class="flex p-0 w-full items-center cursor-pointer">
        <input :ref="setOtpRef" v-model="this.data" readonly type="text" :placeholder="input_placeholder" :class="['input cursor-pointer']" />
        <div class="py-1 px-2.5 text-green text-sm leading-5 tracking-[-0.35px] rounded border border-[#E5E5EC] absolute z-10 right-0 cursor-pointer">본인 인증</div>
      </div>
      <!-- readonly_address : 주소 찾기 -->
      <div v-else-if="this.type == 'readonly_address'" class="flex p-0 w-full items-center cursor-pointer relative">
        <input :ref="setOtpRef" v-model="this.data" readonly type="text" :placeholder="input_placeholder" :class="['input cursor-pointer']"/>
        <div class="py-1 px-2.5 text-green text-sm leading-5 tracking-[-0.35px] rounded border border-[#E5E5EC] absolute z-10 right-0 cursor-pointer">주소 찾기</div>
      </div>
      <!--   comment   -->
      <div
        v-else-if="this.type == 'comment'" class="flex justify-between w-full gap-2 items-center cursor-pointer relative">
        <!-- addComma -->
        <input
          :ref="setOtpRef"
          v-model="this.input_data"
          type="text"
          :placeholder="input_placeholder"
          :class="['input']"
          @input="inputUpdate()"
        />
        <span v-if="this.type == 'comment'" class="absolute z-10 text-sm leading-5 text-[#2FADA6] right-0 font-bold">등록</span>
      </div>
      <!--   search   -->
      <div
        v-else-if="this.type == 'search'" class="flex justify-between w-full gap-2 items-center cursor-pointer relative">
        <!-- addComma -->
        <input
          :ref="setOtpRef"
          v-model="this.input_data"
          type="text"
          :placeholder="input_placeholder"
          :class="['input']"
          @input="inputUpdate()"
        />
        <svg @click="this.searchSubmit" v-if="this.type == 'search'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" class="absolute z-10 right-0">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6.66667C3 4.64162 4.64162 3 6.66667 3C8.69171 3 10.3333 4.64162 10.3333 6.66667C10.3333 8.69171 8.69171 10.3333 6.66667 10.3333C4.64162 10.3333 3 8.69171 3 6.66667ZM6.66667 1C3.53705 1 1 3.53705 1 6.66667C1 9.79628 3.53705 12.3333 6.66667 12.3333C7.87028 12.3333 8.98626 11.9581 9.90397 11.3182L13.2929 14.7071C13.6834 15.0976 14.3166 15.0976 14.7071 14.7071C15.0976 14.3166 15.0976 13.6834 14.7071 13.2929L11.3182 9.90397C11.9581 8.98626 12.3333 7.87028 12.3333 6.66667C12.3333 3.53705 9.79628 1 6.66667 1Z" fill="#222222"/>
        </svg>
      </div>
      <!--   email_confirm : 이메일 인증번호 인증   -->
      <div
        v-else-if="this.type == 'email_confirm'" class="flex justify-between w-full gap-2 items-center cursor-pointer relative">
        <!-- addComma -->
        <input
          :ref="setOtpRef"
          v-model="this.input_data"
          type="text"
          :placeholder="input_placeholder"
          :class="['input']"
          @input="inputUpdate()"
        />
        <div v-if="this.type == 'email_confirm'" class="py-1 px-2.5 text-green text-sm leading-5 tracking-[-0.35px] rounded border border-[#E5E5EC] absolute z-10 right-0 cursor-pointer">
          인증번호 전송
        </div>
      </div>
      <!--   confirm : 이메일 인증번호 확인   -->
      <div
        v-else-if="this.type == 'confirm'" class="flex justify-between w-full gap-2 items-center cursor-pointer relative">
        <!-- addComma -->
        <input
          :ref="setOtpRef"
          v-model="this.input_data"
          type="text"
          :placeholder="input_placeholder"
          :class="['input']"
          @input="inputUpdate()"
        />
        <div v-if="this.type == 'confirm'" class="py-1 px-2.5 text-green text-sm leading-5 tracking-[-0.35px] rounded border border-[#E5E5EC] absolute z-10 right-0 cursor-pointer">
          확인
        </div>
      </div>
      <!--  business_confirm : 사업자번호 확인   -->
      <div
        v-else-if="this.type == 'business_confirm'" class="flex justify-between w-full gap-2 items-center cursor-pointer relative">
        <!-- addComma -->
        <input
          :ref="setOtpRef"
          v-model="this.input_data"
          type="text"
          :placeholder="input_placeholder"
          :class="['input']"
          @input="inputUpdate()"
        />
        <div v-if="this.type == 'business_confirm'" class="py-1 px-2.5 text-green text-sm leading-5 tracking-[-0.35px] rounded border border-[#E5E5EC] absolute z-10 right-0 cursor-pointer">
          사업자번호 인증
        </div>
      </div>
      <!-- 최대 길이 제한 -->
      <input
        v-else-if="this.maxLength && !this.minLength"
        :ref="setOtpRef"
        v-model="this.input_data"
        :type="this.type"
        :placeholder="input_placeholder"
        :class="['input']"
        @input="inputUpdate()"
        :disabled="this.disabled"
        :maxlength="this.maxLength"
      />
      <!-- 최초 길이 제한 -->
      <input
        v-else-if="!this.maxLength && this.minLength"
        :ref="setOtpRef"
        v-model="this.input_data"
        :type="this.type"
        :placeholder="input_placeholder"
        :class="['input']"
        @input="inputUpdate()"
        :disabled="this.disabled"
        :minlength="this.minLength"
      />
      <!-- 최대/최소 길이 제한 -->
      <input
        v-else-if="this.maxLength && this.minLength"
        :ref="setOtpRef"
        v-model="this.input_data"
        :type="this.type"
        :placeholder="input_placeholder"
        :class="['input']"
        @input="inputUpdate()"
        :disabled="this.disabled"
        :maxlength="this.maxLength"
        :minlength="this.minLength"
      />
      <!-- 그외 -->
      <input v-else :ref="setOtpRef" v-model="this.input_data" :type="this.type" :placeholder="input_placeholder" :class="['input']" @input="inputUpdate()" :disabled="this.disabled" />
    </div>
    <p v-if="this.alert_text && this.alert_text !== ''" :class="[this.checkColor('text'), 'text-[11px] bg-transparent text-left leading-[14px] mt-2']">
      {{ this.alert_text }}
    </p>
  </div>
</template>

<script>
import { onBeforeUpdate, onUpdated } from "vue";

export default {
  /*
    props 설명
    min: (TEXT) min-width(default 100%)
    max: (TEXT) max-width(default 100%)
    width: (TEXT) width(default 100%)
    type: (TEXT) text number id readonly읽기 전용(포커스 및 수정 불가)
    placeholder: (TEXT) placeholder
    title: (TEXT) 인풋 상단 제목 표시
    maxLength: (NUMBER) 최대 길이
    minLength: (NUMBER) 최소 길이
    isLength: (T/F) 문자 길이 표시
    disabled: (T/F) 비활성화
    txt: (T/F) 문자만 입력 가능
    eng: (T/F) 영어만 입력 가능
    num: (T/F) 숫자만 입력 가능
    comma: (T/F) 숫자 단위 , 표시
    alertText: (TEXT) 경고문구
    alertType: (T/F/"") 경고문구타입(테두리 및 글자 색상) + 빈문자열일 경우 검은색
    isLink: (T/F) 피움링크 영문 숫자 _ 외 입력 차단
    trim: (T/F) String.trim() 앞뒤 공백 제거 + 띄어쓰기 불가
    price: 할인 가격 계산용 + 원금
    readonly: true일 경우 배경색 f9f9f9
    comment: 댓글 등록
    search: 검색
    email_confirm: 이메일 인증
    confirm: 인증번호 확인
    business_confirm: 사업자등록번호 인증

     */
  props: ["min", "max", "data", "width", "type", "placeholder", "title", "maxLength", "minLength", "isLength", "disabled", "txt", "eng", "num", "comma", "text", "alertText", "alertType", "isLink", "trim", "price", "isDiscount", "readonly", "readonly_confirm", "readonly_address", "option", "comment", "search", "email_confirm", "confirm", "business_confirm"],
  components: {},
  setup(props) {
    // console.log("props", props);
    let otpRefs = [];
    const setOtpRef = (el) => {
      otpRefs.push(el);
    };
    onBeforeUpdate(() => {
      otpRefs = [];
    });
    onUpdated(() => {});

    return {
      otpRefs,
      setOtpRef,
    };
  },
  data() {
    return {
      s_width: this.width === undefined ? "100%" : this.width,
      s_min: this.min === undefined ? "100%" : this.min,
      s_max: this.max === undefined ? "100%" : this.max,
      alert_text: this.alertText,
      alert_type: this.alertType,
      input_placeholder: this.placeholder,
      input_data: "",
      input_success: "",
      errorText: {
        text: "",
        type: "",
      },
      input_type: "text",
    };
  },
  watch: {
    type(newValue, oldValue) {
      // this.type = newValue;
      this.input_type = newValue;
    },
    data() {
      this.input_data = this.data;
    },
    alertType() {
      this.alert_type = this.alertType;
    },
    alertText() {
      this.alert_text = this.alertText;
    },
    success() {
      this.input_success = this.success;
    },
    placeholder() {
      this.input_placeholder = this.placeholder;
    },
  },
  computed: {},
  methods: {
    checkColor(type) {
      if (this.type !== "readonly") {
        if (type == "input") {
          if (this.disabled) {
            return "bg-[#EBEBEB]";
          }
          if (this.alert_type === "" || this.alert_type === true || this.alert_type === undefined) {
            return "border-[#B2B2B2] focus:text-black focus:border-primary focus:ring-primary focus-within:border-primary linkText";
          } else {
            return "border-red focus:border-red";
          }

        } else {
          /* type == 'text'  */
          if (this.alert_type === "" || this.alert_type === undefined) {
            return "text-[#505050]";
          } else if (this.alert_type === true) {
            return "text-primary-light";
          } else {
            return "text-red";
          }
        }
      } else {
        if (this.readonly || this.readonly_address) {
          return "bg-[#F3F3F3] border-[#E5E5EC] focus:border-[#E5E5EC] focus:ring-[#E5E5EC] focus-within:border-[#E5E5EC]";
        } else {
          return "border-[#B2B2B2] focus:border-[#B2B2B2] focus:ring-[#B2B2B2] focus-within:border-[#B2B2B2]";
        }
      }
    },
    clickFocus() {
      this.otpRefs[0].focus();
    },
    errorTextReset() {
      this.errorText.text = "";
      this.errorText.type = "";
    },
    inputUpdate() {
      if (this.trim) {
        this.input_data = this.unspaced(this.input_data);
      }

      // if (this.isLink) {
      //   this.input_data = this.input_data.toLowerCase();
      //   if (this.checkLink(this.input_data)) {
      //     this.errorText.text = "2~20자 사이 이상. 영문, 숫자, ‘_’ 만 사용 가능합니다. 소문자와 대문자는 구별하지 않으며 중복된 주소는 사용할 수 없습니다.";
      //     this.errorText.type = false;
      //     return this.$emit("error", this.errorText);
      //   }
      //   if (!this.checkLink(this.input_data)) {
      //     this.errorTextReset();
      //     return this.$emit("error", this.errorText);
      //   }
      // }
      if (this.txt) {
        this.input_data = this.onlyText(this.input_data);
      }
      if (this.eng) {
        this.input_data = this.onlyEnglish(this.input_data);
      }
      if (this.num) {
        this.input_data = this.onlyNumber(this.input_data);
      }
      if (this.comma || this.type == "price" || this.type == "count") {
        if (this.input_data) {
          this.input_data = this.addComma(parseInt(this.input_data.replace(/,/g, "")));
        }
      }

      // 데이터 업데이트
      this.$emit("update", this.input_data);

      if (this.maxLength !== undefined && this.maxLength !== 0) {
        this.input_data = this.input_data.substr(0, this.maxlength);
        if (this.input_data.length >= this.maxLength) {
          this.errorText.text = "최대 글자수는 " + this.maxLength + "자 입니다.";
          this.errorText.type = false;

          return this.$emit("error", this.errorText);
        } else {
          this.errorTextReset();
          return this.$emit("error", this.errorText);
        }
      }
      if (this.minLength !== undefined && this.minLength !== 0) {
        if (this.input_data.length === 0) {
          this.errorText.text = "최소 글자수는 " + this.minLength + "자 입니다.";
          this.errorText.type = false;
          return this.$emit("error", this.errorText);
        } else {
          this.errorTextReset();
          return this.$emit("error", this.errorText);
        }
      }

      return this.$emit("error", this.errorText);
    },
    searchSubmit() {
      this.$emit('searchSubmit');
    },
  },
  mounted() {
    if (this.data) {
      this.input_data = this.data;
    }
  },
};
</script>
