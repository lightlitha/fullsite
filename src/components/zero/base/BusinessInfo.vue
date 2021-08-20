<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card
        title="KEEP IN TOUCH WITH US"
        pace="6"
      >
        We would love to here from you. Use form to make queries
      </base-info-card>

      <base-business-contact dense />
    </div>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'BaseBusinessInfo',

    props: { dark: Boolean },

    data: () => ({
      business: [
        // {
        //   icon: 'mdi-map-marker-outline',
        //   title: 'Address',
        //   text: '05 Ferndale Rd.<br>Humewood, Port Eizabeth 6001',
        // },
        {
          icon: 'mdi-cellphone',
          title: 'Phone',
          text: '+27 (82) 835 7306<br>+27 (73) 451 3142',
        },
        {
          icon: 'mdi-email',
          title: 'Email',
          text: 'enquiry@phiscus.co.za',
        },
      ],
    }),
  }
</script>
