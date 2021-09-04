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
        name="Width"
        rules="double:2"
      >
        <v-text-field
          v-model="product.width"
          :error-messages="errors"
          label="Width"
          required
          outlined
          suffix="mm"
        />
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="Height"
        rules="double:2"
      >
        <v-text-field
          v-model="product.height"
          :error-messages="errors"
          label="Height"
          required
          outlined
          suffix="mm"
        />
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="Depth"
        rules="double:2"
      >
        <v-text-field
          v-model="product.depth"
          :error-messages="errors"
          label="Depth"
          required
          outlined
          suffix="mm"
        />
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="Weight"
        rules="double:2"
      >
        <v-text-field
          v-model="product.weight"
          :error-messages="errors"
          label="Weight"
          required
          outlined
          suffix="g"
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
    name: 'ProductShipping',
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      product: { weight: null, depth: null, height: null, width: null },
    }),
    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.product = { weight: null, depth: null, height: null, width: null }
        this.$refs.observer.reset()
      },
    },
  }
</script>
