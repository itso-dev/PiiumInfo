<template>
    <div class="py-[70px] md:py-[80px] pl-5 bg-[#FFF] flex flex-col md:pl-10 lg:pl-[180px] gap-10 md:gap-0">
        <div class="flex flex-col md:items-center md:flex-row">
            <div class="flex flex-col md:py-10 items-start md:w-[320px]" data-aos="fade-up" data-aos-delay="200">
                <p class="text-[#546AB8] text-[40px] leading-[52px] tracking-[1px] font-semibold">Partners</p>
                <p class="text-[#546AB8] text-xl leading-[46px] tracking-[-0.6px] font-semibold">파트너사</p>
            </div>
            <swiper class="swiper-container sw1 w-full md:w-[calc(100%_-_320px)] py-10 md:py-[60px]"
                :modules="modules"
                :slides-per-view="4"
                :space-between="40"
                :loop="true"
                :autoplay="{ delay: 1500, disableOnInteraction: false }"
                :breakpoints="{
                '0': {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                '500': {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                '768': {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                '1024': {
                    slidesPerView: 5,
                    spaceBetween: 40,
                },
                }"
            >
                <swiper-slide>
                    <img src="/icons/partner/partner.png"  class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/partner/partner2.png"  class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/partner/partner3.png"  class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/partner/partner4.png"  class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/partner/partner5.png"  class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/partner/partner.png"  class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/partner/partner2.png"  class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/partner/partner3.png"  class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/partner/partner4.png"  class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/partner/partner5.png"  class="w-full h-full object-cover object-center" />
                </swiper-slide>
            </swiper>
        </div>
        <div class="flex flex-col md:items-center md:flex-row">
            <div class="flex flex-col md:py-10 items-start md:w-[320px]" data-aos="fade-up" data-aos-delay="200">
                <p class="text-[#546AB8] text-[40px] leading-[52px] tracking-[1px] font-semibold">Customer</p>
                <p class="text-[#546AB8] text-xl leading-[46px] tracking-[-0.6px] font-semibold">고객사</p>
            </div>
            <swiper class="swiper-container sw2 w-full  md:w-[calc(100%_-_320px)] py-10 md:py-0" :modules="modules" :slides-per-view="5" :space-between="60" :loop="true" :autoplay="{ delay: 1000, disableOnInteraction: false }"
            :breakpoints="{
                '0': {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                '500': {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                '768': {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                '1024': {
                    slidesPerView: 5,
                    spaceBetween: 40,
                },
                '1600': {
                    slidesPerView: 6,
                    spaceBetween: 40,
                },
                }"
            >
                <swiper-slide>
                    <img src="/icons/customer/customer.png" class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/customer/customer2.png" class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/customer/customer3.png" class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/customer/customer4.png" class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/customer/customer5.png" class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/customer/customer6.png" class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/customer/customer7.png" class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/customer/customer8.png" class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/customer/customer9.png" class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/customer/customer10.png" class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/customer/customer11.png" class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/customer/customer12.png" class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/customer/customer13.png" class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/customer/customer14.png" class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/customer/customer15.png" class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/customer/customer16.png" class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/customer/customer17.png" class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/customer/customer18.png" class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/customer/customer19.png" class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/customer/customer20.png" class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/customer/customer21.png" class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/customer/customer22.png" class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/customer/customer23.png" class="w-full h-full object-cover object-center" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/icons/customer/customer24.png" class="w-full h-full object-cover object-center" />
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Pagination, Navigation, Autoplay } from "swiper";

export default {
  setup(props) {
    return {
      modules: [Pagination, Navigation, Autoplay],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
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