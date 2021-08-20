<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/home-hero.jpg')"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center"
          height="100%"
          max-width="700"
          width="100%"
        >
          <base-heading title="THE POINT OF A SALE" />

          <base-body>
            Phiscus. The only reason your business will never be affected by
            Pandemics, Electric Blackouts (Load Shedding). A 24/7 solution,
            solving everyday business problems. Exploring all avenues from
            physical stores to online. Be the best of both worlds.
          </base-body>

          <div
            :class="
              $vuetify.breakpoint.smAndDown
                ? 'flex-column align-start'
                : 'align-center'
            "
            class="d-flex flex-wrap"
          >
            <base-btn to="/about">
              Discover More
            </base-btn>

            <span class="font-weight-bold ml-6 mr-4 my-4">or</span>

            <base-btn
              :ripple="false"
              class="pa-1"
              height="auto"
              text
              to="/register"
            >
              Get Started Now
            </base-btn>
          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
  export default {
    name: 'SectionHero',

    provide: {
      theme: { isDark: true },
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>
