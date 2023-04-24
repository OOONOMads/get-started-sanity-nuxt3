export default defineNuxtConfig({
  modules: ["@nuxtjs/sanity", '@nuxtjs/i18n'],
  sanity: {
    projectId: "5m726eqr",
		apiVersion: '2022-03-25'
  },
  ssr: false,
  css: [
    '/assets/css/fonts.scss',
    '/assets/css/variables.scss',
    '/assets/css/global.scss',
    '/assets/css/form.scss'
  ],
  i18n: {
    /* module options */
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English' },
    ],
  },
    app: {
    layoutTransition: { name: 'page', mode: 'default' },
    head: {
      title: 'Acorn Landing page',
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          //perhaps change to local version
          href: 'https://cdn.shopify.com/s/files/1/0353/4058/2971/files/favicon_white_32x32.png?v=1655811960'
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      sanityProject: '5m726eqr',
      sanityDataSet: 'production'
    }
  }
});