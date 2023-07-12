import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  theme: {
    extend: {
      boxShadow: {
        button: '0 8px 50px #6b3e8a',
      },
      dropShadow: {
        logo: '0 8px 50px rgba(17, 12, 13, 60)',
        logoDark: '0 8px 50px rgba(54, 0, 20, 60)',
      },
      fontFamily: {
        display: ['Inter'],
      },
      fontSize: {
        'ms': '0.925rem',
      }
    }
  },
  content: [
    'nuxt.config.ts',
  ],
  darkMode: 'class',
}
