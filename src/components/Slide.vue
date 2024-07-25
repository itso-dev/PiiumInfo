<template>
    <div class="py-[70px] md:py-[80px] pl-5 bg-[#FFF] flex flex-col md:pl-10 lg:pl-[180px] gap-10 md:gap-0">
        <div class="flex flex-col md:items-center md:flex-row">
            <div class="flex flex-col md:py-10 items-start md:w-[320px]" data-aos="fade-up" data-aos-delay="200">
                <p class="text-[#546AB8] text-[40px] leading-[52px] tracking-[1px] font-semibold">Partners</p>
                <p class="text-[#546AB8] text-xl leading-[46px] tracking-[-0.6px] font-semibold">파트너사</p>
            </div>
            <div class="pnc-marquee">
                <div class="marquee-content">
                    <img src="/icons/partner/partner.png"/>
                    <img src="/icons/partner/partner2.png"/>
                    <img src="/icons/partner/partner3.png"/>
                    <img src="/icons/partner/partner4.png"/>
                    <img src="/icons/partner/partner5.png"/>
                    <img src="/icons/partner/partner.png"/>
                    <img src="/icons/partner/partner2.png"/>
                    <img src="/icons/partner/partner3.png"/>
                    <img src="/icons/partner/partner4.png"/>
                    <img src="/icons/partner/partner5.png"/>
                </div>
            </div>
        </div>
        <div class="flex flex-col md:items-center md:flex-row">
            <div class="flex flex-col md:py-10 items-start md:w-[320px]" data-aos="fade-up" data-aos-delay="200">
                <p class="text-[#546AB8] text-[40px] leading-[52px] tracking-[1px] font-semibold">Customer</p>
                <p class="text-[#546AB8] text-xl leading-[46px] tracking-[-0.6px] font-semibold">고객사</p>
            </div>
            <div class="pnc-marquee2">
                <div class="marquee-content">
                    <img src="/icons/customer/customer.png"/>
                    <img src="/icons/customer/customer2.png"/>
                    <img src="/icons/customer/customer3.png"/>
                    <img src="/icons/customer/customer4.png"/>
                    <img src="/icons/customer/customer5.png"/>
                    <img src="/icons/customer/customer6.png"/>
                    <img src="/icons/customer/customer7.png"/>
                    <img src="/icons/customer/customer8.png"/>
                    <img src="/icons/customer/customer9.png"/>
                    <img src="/icons/customer/customer10.png"/>
                    <img src="/icons/customer/customer11.png"/>
                    <img src="/icons/customer/customer12.png"/>
                    <img src="/icons/customer/customer13.png"/>
                    <img src="/icons/customer/customer14.png"/>
                    <img src="/icons/customer/customer15.png"/>
                    <img src="/icons/customer/customer16.png"/>
                    <img src="/icons/customer/customer17.png"/>
                    <img src="/icons/customer/customer18.png"/>
                    <img src="/icons/customer/customer19.png"/>
                    <img src="/icons/customer/customer20.png"/>
                    <img src="/icons/customer/customer21.png"/>
                    <img src="/icons/customer/customer22.png"/>
                    <img src="/icons/customer/customer23.png"/>
                    <img src="/icons/customer/customer24.png"/>
                </div>
            </div>
                
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