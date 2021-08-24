// const i18nService = {
//     defaultLanguage: "en",

//     languages: [
//       {
//         lang: "en",
//         name: "English",
//         flag: process.env.BASE_URL + "media/svg/flags/226-united-states.svg"
//       },
//       {
//         lang: "ch",
//         name: "Mandarin",
//         flag: process.env.BASE_URL + "media/svg/flags/034-china.svg"
//       },
//       {
//         lang: "es",
//         name: "Spanish",
//         flag: process.env.BASE_URL + "media/svg/flags/128-spain.svg"
//       },
//       {
//         lang: "jp",
//         name: "Japanese",
//         flag: process.env.BASE_URL + "media/svg/flags/063-japan.svg"
//       },
//       {
//         lang: "de",
//         name: "German",
//         flag: process.env.BASE_URL + "media/svg/flags/162-germany.svg"
//       },
//       {
//         lang: "fr",
//         name: "French",
//         flag: process.env.BASE_URL + "media/svg/flags/195-france.svg"
//       }
//     ],

//     /**
//      * Keep the active language in the localStorage
//      * @param lang
//      */
//     setActiveLanguage(lang) {
//       localStorage.setItem("language", lang);
//     },

//     /**
//      * Get the current active language
//      * @returns {string | string}
//      */
//     getActiveLanguage() {
//       return localStorage.getItem("language") || this.defaultLanguage;
//     }
//   };

//   export default i18nService;

import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

function loadLocaleMessages () {
  const locales = require.context(
    '../locales',
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i,
  )
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([a-z0-9]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages(),
})
