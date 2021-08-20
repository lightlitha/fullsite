<template>
  <base-section id="about-our-product">
    <base-section-heading
      color="grey lighten-2"
      icon="mdi-vuetify"
      title="About our Product"
    />

    <v-container>
      <v-row>
        <v-col cols="12">
          <base-info-card v-bind="about" />
        </v-col>
        <v-col
          v-for="card in cards"
          :key="card.title"
          cols="12"
          md="4"
        >
          <base-info-card v-bind="card" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionAboutOurProduct',

    data: () => ({
      about: [
        {
          title: 'What is Phiscus',
          subtitle: 'Quick Word',
          text:
            'Phiscus uses independent pieces (called modules) to facilitate business rules for different industries into one Point Of Sale system. Indistries range from Salons, Car Washes, Retailers, Resturants, etc. Phiscus make complex tasks simple, having modules that allow businesses to automate stock orders, keep track of inventory & suppliers/vendors, make invoices, reports & get all your accounting done in one place, etc.',
          callout: '00',
        },
      ],
      cards: [
        {
          title: 'Merge to your business',
          subtitle: 'Best Productivity',
          text:
            'Tailor Phiscus to your business needs by using modules relevant to your business tasks. (e.g Stock Transfer Order, Payrolls, etc)',
          callout: '01',
        },
        {
          title: 'Affordable Prices',
          subtitle: 'Independent Modules',
          text:
            'No business left behind; pay for what you use and remove what you do not use. No excuse for making good business decisions.',
          callout: '02',
        },
        {
          title: 'Accessibility',
          subtitle: 'Internet of Things',
          text:
            'Manage your business from your smart phone or tablet, from anywhere and anytime',
          callout: '03',
        },
      ],
    }),
  }
</script>
