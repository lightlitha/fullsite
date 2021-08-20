<template>
  <base-section id="theme-features">
    <base-section-heading title="Phiscus Features">
      Don't Busy-ness it. Phiscus It !!.
    </base-section-heading>

    <v-container>
      <v-row>
        <v-col
          v-for="(feature, i) in features"
          :key="i"
          cols="12"
          md="6"
        >
          <base-avatar-card
            v-bind="feature"
            align="left"
            horizontal
          >
            {{ feature.content }}
          </base-avatar-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionThemeFeatures',

    data: () => ({
      features: [
        {
          title: 'Business Omni Presence',
          icon: 'mdi-map-marker-distance',
          content:
            'Be available online and physical in one go. One system, one subscription',
        },
        {
          title: 'Smooth Inventory Management',
          icon: 'mdi-food-fork-drink',
          content:
            'Be aware of all your resources, broken, damaged, sold, near expiration date, incoming and out going',
        },
        {
          color: 'primary',
          dark: true,
          title: 'Easily Customizable',
          icon: 'mdi-pencil-box-outline',
          content:
            'Suit your business style. Blend your own colors and give life to your business and happy customers',
        },
        {
          title: 'Multi Payment Methods',
          icon: 'mdi-point-of-sale',
          content:
            'Explore all payment avenues, cash, cards, checks and even crypto. Never be left behind, serve all payments',
        },
        {
          title: 'Customer Management and Marketing',
          icon: 'mdi-podium',
          content:
            'Tailor your goods to suit each customers taste. Give the best deals and know your customers well.  ',
        },
        {
          title: 'Pixel Perfect Design For Sales',
          icon: 'mdi-graph',
          content:
            'Know all your sales, profits, losses, expenses, from the past to the future. Time Travel',
        },
      ],
    }),
  }
</script>
