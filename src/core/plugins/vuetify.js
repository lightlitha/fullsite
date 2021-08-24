// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import { VCol, VRow } from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VCol,
    VRow,
  },
})

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
      dark: {
        background: '#344675',
        primary: '#4e70e1',
        secondary: '#f4f5f7',
        accent: '#82B1FF',
        error: '#fd5d93',
        info: '#1d8cf8',
        success: '#00f2c3',
        warning: '#ff8d72',
      },
    },
  },
})

// $default:       #344675 !default;
// $black:         #222a42 !default;
