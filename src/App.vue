<template>
  <div id="page">
    <Head ref="Head" />
    <router-view :key="$route.fullPath" ref="view"></router-view>
    <Footer ref="Footer" />
  </div>
</template>

<script>
import Head from "@/components/Head.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Head,
    Footer,
  },
  setup() {},
  watch: {},
  methods: {},
  computed: {},
  created() {},
  mounted() {},
};
</script>
