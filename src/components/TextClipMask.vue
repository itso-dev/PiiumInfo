<template>
    <div class="relative h-screen flex items-center justify-center">
      <h1 ref="text" class="text-6xl text-[#111] font-bold text-gray-900 clip-mask">
        Scroll to Reveal
      </h1>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('clip-mask-active');
          } else {
            entry.target.classList.remove('clip-mask-active');
          }
        });
      }, options);
  
      observer.observe(this.$refs.text);
    }
  }
  </script>
  
  <style scoped>
  .clip-mask {
    transition: clip-path 0.5s ease;
    clip-path: inset(100% 0 0 0);
  }
  
  .clip-mask-active {
    clip-path: inset(0 0 0 0);
  }
  </style>
  