import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://luoxuhai.com',
  i18n: {
    locales: ['en', 'zh-cn', 'zh-tw', 'ja'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
