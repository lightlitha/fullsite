<template>
  <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <form
      class="p-2"
      @submit.prevent="submit"
    >
      <validation-provider name="Short Description">
        <v-textarea
          v-model="product.short_description"
          outlined
          name="input-7-4"
          label="Short Description"
        />
      </validation-provider>
      <validation-provider name="Description">
        <v-textarea
          v-model="product.description"
          outlined
          name="input-7-4"
          label="Description"
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
    name: 'ProductTax',
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      product: {
        short_description: null,
        description: null,
      },
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.product = {
          short_description: null,
          description: null,
        }
        this.$refs.observer.reset()
      },
    },
  }
</script>
