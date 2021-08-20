<template>
  <v-footer
    id="home-footer"
    color="grey darken-4"
    dark
    min-height="72"
  >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        />

        <v-col
          class="text-center text-md-right"
          cols="12"
          md="6"
        >
          Copyright &copy; 2021 Phiscus
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'HomeFooter',

    data: () => ({}),
  }
</script>

<style lang="sass">
#home-footer a
  text-decoration: none
</style>
