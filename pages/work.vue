<template>
  <div class="px-16 pt-12 pb-8 sm:p-28 w-full sm:w-7/12 z-50">
    <h1 style="transform: translateY(-32px)" class="hero-header font-bold mb-4 text-2xl sm:text-6xl text-[#ffffffc2] opacity-0">Work</h1>

    <div style="transform: translateY(-32px)" class="hero-links flex items-center gap-6 sm:mx-3 pt-4 opacity-0">
      <a
        href="https://github.com/trevorstacy"
        target="_blank"
        class="drop-shadow text-xl sm:text-2xl text-white"
      >GitHub</a>

      <a
        href="https://www.linkedin.com/in/trevor-stacy-721719b0/"
        target="_blank"
        class="drop-shadow text-xl sm:text-2xl text-white"
      >LinkedIn</a>

      <a
        href="/trevor-stacy-resume.pdf"
        target="_blank"
        title="Download Resume"
        class="drop-shadow flex items-center gap-1 text-xl sm:text-2xl text-white"
      >Resume <span class="material-symbols-outlined -rotate-45">send</span></a>
    </div>

    <div style="transform: translateY(-32px)" class="hero-links flex items-center sm:mx-3 pt-6 opacity-0">
      <a
        href="https://github.com/trevorstacy"
        target="_blank"
        class="border-r border-[#bbb1db] mr-4 pr-4 text-white"
        :class="{ 'underline': activeTab == 'experience' }"
        @click.prevent="activeTab = 'experience'"
      >Experience</a>

      <a
        href="https://github.com/trevorstacy"
        target="_blank"
        class="text-white"
        :class="{ 'underline': activeTab == 'skills' }"
        @click.prevent="activeTab = 'skills'"
      >Skills</a>
    </div>

    <div class="sm:mx-3 pt-6 space-y-8" v-if="activeTab == 'experience'">
      <div style="transform: translateY(-32px)" class="hero-body opacity-0 space-y-4">
        <h4 class="drop-shadow-lg text-white font-bold">
          Senior Software Engineer, eLink Design; Lexington Kentucky — 2018 - Present
        </h4>

        <p class="drop-shadow-lg text-white text-ms">Developed high-scale web applications with custom in-house CMS and framework built on symfony and doctrine, along with other CMS's such as WordPress. Maintained web and mobile applications for existing clients. Developed small scale and enterprise cross-platform and native (iOS) mobile applications, with extreme attention to detail and design. Helped maintain AGILE workflow for team, as well as sprints using Monday.</p>

        <p class="drop-shadow-lg text-white text-ms">Technologies: Laravel, WordPress, Doctrine, Vue, React, React Native, Xamarin Forms, TailwindCSS, BootstrapCSS, UIKit, SwiftUI, PHP, Javascript / Typescript, Swift, C#, AWS EC2, and AWS S3</p>
      </div>

      <div style="transform: translateY(-32px)" class="hero-body opacity-0 space-y-4">
        <h4 class="drop-shadow-lg text-white font-bold mb-4">
          Support Specialist, eLink Design; Lexington Kentucky — 2015 - 2018
        </h4>

        <p class="drop-shadow-lg text-white text-ms">Helped existing clients with a variety of technical issues ranging from email to server problems. Worked on small and large updates for existing web applications while delivering results in a timely manner.</p>

        <p class="drop-shadow-lg text-white text-ms">Technologies: PHP, Doctrine, jQuery, BootstrapCSS, Vue, ZenDesk, Ubuntu / CentOS Server Administration</p>
      </div>

      <div style="transform: translateY(-32px)" class="hero-body opacity-0 space-y-4">
        <h4 class="drop-shadow-lg text-white font-bold mb-4">
          Senior Software Engineer, NoLimits Central; Lexington Kentucky — 2015 - Present
        </h4>

        <p class="drop-shadow-lg text-white text-ms">A file exchange and online forum personally developed by me, with features such as realtime messaging, S3 file uploading / downloading, robust searching, and more.</p>

        <p class="drop-shadow-lg text-white text-ms">Technologies: PHP, Python, Javascript, Laravel, Vue, TailwindCSS, AWS S3 and SQS, Pusher</p>
      </div>
    </div>

    <div class="sm:mx-3 pt-6 space-y-8" v-if="activeTab == 'skills'">
      <h4 class="drop-shadow-lg text-white font-bold">Technologies</h4>

      <h4 class="drop-shadow-lg text-white font-bold">Languages</h4>

      <h4 class="drop-shadow-lg text-white font-bold">Tools</h4>

      <h4 class="drop-shadow-lg text-white font-bold">Favorite Books</h4>
    </div>
  </div>
</template>

<script setup lang="ts">
  import anime from 'animejs/lib/anime.es.js';

  const activeTab = ref('experience');

  useHead({
    title: 'Work Experience - Trevor Stacy'
  });

  onMounted(() => {
    anime({
      targets: ['.hero-header', '.hero-links', '.hero-body'],
      easing: 'easeOutExpo',
      duration: 1000,
      opacity: 1,
      translateY: 0,
      delay: anime.stagger(100)
    });
  });
</script>
