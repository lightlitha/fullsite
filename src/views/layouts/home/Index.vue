<template>
  <v-app>
    <home-app-bar />

    <home-view />

    <home-footer />

    <home-settings />
  </v-app>
</template>

<script>
  export default {
    name: 'HomeLayout',

    components: {
      HomeAppBar: () => import('@/views/layouts/home/AppBar'),
      HomeFooter: () => import('@/views/layouts/home/Footer'),
      HomeSettings: () => import('@/views/layouts/home/Settings'),
      HomeView: () => import('@/views/layouts/home/View'),
    },
  }
</script>
