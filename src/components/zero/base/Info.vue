<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-img
        :src="require('@/assets/zero-logo-dark.svg')"
        contain
        max-width="128"
        min-height="78"
        width="100%"
      />

      <base-title
        size="body-1"
        space="4"
        title="MULTI-PURPOSE POS"
        weight="regular"
      />

      <base-body>
        We would love to here from you.
      </base-body>

      <base-btn
        class="mb-12"
        color="white"
        outlined
        to="/about"
      >
        More Info
      </base-btn>
    </div>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'BaseInfo',

    props: {
      title: String,
      dark: Boolean,
    },

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
