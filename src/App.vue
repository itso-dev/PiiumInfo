<template>
  <div id="page">
    <router-view :key="$route.fullPath"  ref="view"></router-view>
    <Footer ref="Footer" />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Footer,
  },
  setup() {
  },
  watch: {
  },
  methods: {
  },
  computed: {
  
  },
  created() {
  },
  mounted() {
  },
};
</script>