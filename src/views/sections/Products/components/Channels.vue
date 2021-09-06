<template>
  <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <form
      class="p-2"
      @submit.prevent="submit"
    >
      <validation-provider name="channels">
        <v-select
          v-model="product.channel"
          :items="channels"
          chips
          label="Channels"
          multiple
          outlined
        />
      </validation-provider>

      <v-btn
        class="mr-4"
        type="submit"
        :disabled="invalid"
      >
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form>
  </validation-observer>
</template>

<script>
  import { ValidationObserver, ValidationProvider } from 'vee-validate'

  export default {
    name: 'ProductChannels',
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      product: { channel: null },
      channels: ['Default'],
    }),
    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.product = { channel: null }
        this.$refs.observer.reset()
      },
    },
  }
</script>
