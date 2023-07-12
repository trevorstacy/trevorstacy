<template>
  <div>
    <canvas class="absolute opacity-[.20]" id="light-ray-canvas"></canvas>

    <AppHeader/>
    <NuxtPage/>

    <div class="z-10">
      <img
        src="/vue.png"
        alt="Vue JS Logo"
        class="vue-logo absolute bottom-96 right-64 drop-shadow-logo w-48 mix-blend-overlay dark:mix-blend-normal dark:drop-shadow-logo-dark dark:opacity-40"
        style="transform: rotate(-25deg) skewY(-8deg) translateX(50px) translateY(-60px); opacity: 0"
      />
    </div>

    <div class="z-10">
      <img
        src="/laravel.jpeg"
        alt="Laravel Logo"
        class="laravel-logo absolute bottom-80 right-[28rem] drop-shadow-logo h-32 w-32 mix-blend-overlay dark:mix-blend-normal dark:drop-shadow-logo-dark dark:opacity-30 rounded-3xl select-none"
        style="transform: rotate(8deg) translateY(-40px); opacity: 0"
      />
    </div>

    <div class="z-10">
      <img
        src="/swiftui.png"
        alt="SwiftUI Logo"
        class="swiftui-logo absolute bottom-56 right-[18rem] drop-shadow-logo h-24 w-24 mix-blend-overlay dark:drop-shadow-logo-dark dark:opacity-30 rounded-3xl select-none"
        style="transform: rotate(48deg) translateX(-10px) translateY(40px); opacity: 0"
      />
    </div>

    <AppFooter/>
  </div>
</template>

<script setup lang="ts">
  import Particle from './effects/Particle';
  import anime from 'animejs/lib/anime.es.js';

  definePageMeta({
    colorMode: 'light',
    favicon: '/favicon-dark-mode.png',
  });

  const colorMode = useColorMode();

  onMounted(() => {
    const setFavicon = (mode: string) => {
      const icon = document.querySelector('link[rel="icon"]') || document.createElement('link');
      icon.rel = 'icon';
      icon.type = 'image/png';

      if (mode == 'dark') {
        icon.href = '/favicon-dark-mode.png';
      } else if (mode == 'light') {
        icon.href = '/favicon.png';
      }

      document.getElementsByTagName('head')[0].appendChild(icon);
    };

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (e.matches) setFavicon('dark');
    });
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
      if (e.matches) setFavicon('light');
    });

    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

    if (prefersDark) {
      setFavicon('dark');
    } else if (prefersLight) {
      setFavicon('light');
    }

    const canvas: HTMLCanvasElement = document.querySelector('#light-ray-canvas')!;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
    const particlesArray: Array<Particle> = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function initParticles() {
      const particleCount = 200;

      for (let i = 0; i < particleCount; i++) {
        particlesArray.push(new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 2 + 1,
          `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2})`
        ));
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(canvas);
        particlesArray[i].draw(ctx);
      }

      requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();

    anime.timeline({
      duration: 3000,
    }).add({
      targets: '.vue-logo',
      opacity: ['light', 'system'].includes(colorMode.preference) ? 0.6 : 0.4,
      rotate: '24deg',
      skewY: '-8deg',
      translateX: 0,
      translateY: 0,
    }, 100).add({
      targets: '.laravel-logo',
      opacity: ['light', 'system'].includes(colorMode.preference) ? 0.5 : 0.3,
      rotate: '-10deg',
      translateY: 0,
    }, 200).add({
      targets: '.swiftui-logo',
      opacity: ['light', 'system'].includes(colorMode.preference) ? 0.6 : 0.3,
      rotate: '18deg',
      translateX: 0,
      translateY: 0,
    }, 300);
  });
</script>
