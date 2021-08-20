<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card
        :title="title"
        color="primary"
      >
        <slot />
      </base-info-card>

      <template v-for="({ icon, text, title: t }, i) in business">
        <base-avatar-card
          :key="i"
          :icon="icon"
          :outlined="false"
          :title="!dense ? t : undefined"
          color="transparent"
          horizontal
          space="0"
        >
          <!-- Do not use v-html for user -->
          <!-- provided values -->
          <div v-html="text" />
        </base-avatar-card>

        <v-divider
          v-if="i + 1 !== business.length"
          :key="`divider-${i}`"
          class="my-2"
        />
      </template>
    </div>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'BaseBusinessContact',

    props: {
      dark: Boolean,
      dense: Boolean,
      title: String,
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
