<template>
  <base-section id="about-our-product">
    <base-section-heading title="Terms And Conditions" />

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
    name: 'SectionTAndC',

    data: () => ({
      about: [
        {
          title: 'Information Privacy',
          subtitle: 'Authenticity',
          text:
            'We do not sell, or use user information for other uses outside of phiscus',
          callout: '00',
        },
      ],
      cards: [
        {
          title: 'Terms Of Use',
          subtitle: 'No Limits',
          text: 'User pays for it, so user use it however user wishes.',
          callout: '01',
        },
      ],
    }),
  }
</script>
