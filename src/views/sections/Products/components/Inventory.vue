<template>
  <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <form
      class="p-2"
      @submit.prevent="submit"
    >
      <validation-provider
        v-slot="{ errors }"
        name="Stock"
        rules="integer"
      >
        <v-text-field
          v-model="product.stock"
          :error-messages="errors"
          label="Stock"
          required
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
    name: 'ProductInventory',
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      product: { stock: null },
    }),
    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.product = { stock: null }
        this.$refs.observer.reset()
      },
    },
  }
</script>
