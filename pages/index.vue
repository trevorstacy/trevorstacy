<template>
  <div class="px-16 pb-16 pt-12 sm:p-28 w-full sm:w-7/12 relative z-50">
    <h1 style="transform: translateY(-32px)" class="hero-header font-bold mb-4 text-2xl sm:text-8xl text-[#ffffffc2] opacity-0">Trevor Stacy</h1>

    <p style="transform: translateY(-32px)" class="hero-subtitle ml-3 pt-6 text-xl sm:text-2xl text-white drop-shadow-sm opacity-0">Full-stack web / mobile engineer</p>

    <p style="transform: translateY(-32px)" class="hero-body mx-3 pt-10 text-xl sm:text-2xl text-white drop-shadow-sm opacity-0">Hi, I’m a full stack web and mobile engineer with an attention for detail. With eight years of professional experience, I’m well versed in implementing high-quality, user-centric applications across various platforms</p>

    <div style="transform: translateY(-32px)" class="hero-button mx-3 pt-10 opacity-0">
      <NuxtLink href="/work" class="bg-gradient-to-b from-[#4619DB] to-[#3D12CB] dark:from-[#18165F] dark:to-[#0E0C44] px-5 py-3 rounded-xl shadow-button text-white">See Work -></NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
  import anime from 'animejs/lib/anime.es.js';

  useHead({
    title: 'Trevor Stacy'
  });

  onMounted(() => {
    anime({
      targets: '.hero-header',
      easing: 'easeOutExpo',
      duration: 1000,
      opacity: 1,
      translateY: 0,
      delay: 100
    });

    anime({
      targets: '.hero-subtitle',
      easing: 'easeOutExpo',
      duration: 1000,
      opacity: 0.75,
      translateY: 0,
      delay: 200
    });

    anime({
      targets: '.hero-body',
      easing: 'easeOutExpo',
      duration: 1000,
      opacity: 0.75,
      translateY: 0,
      delay: 300
    });

    anime({
      targets: '.hero-button',
      easing: 'easeOutExpo',
      duration: 1000,
      opacity: 1,
      translateY: 0,
      delay: 400
    });
  });
</script>
