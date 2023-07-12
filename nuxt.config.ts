export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0' },
      ],
      bodyAttrs: {
        class: 'bg-fixed antialiased transition duration-300 ease-in-out bg-gradient-to-b from-[#4417DB] to-[#F3C397] dark:from-[#15145E] dark:to-[#BE5F70] from-10% to-90% cursor-default font-display h-full',
      },
      htmlAttrs: {
        class: 'h-full',
      },
    },
  },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
  ],
  colorMode: {
    classSuffix: '',
  },
});
