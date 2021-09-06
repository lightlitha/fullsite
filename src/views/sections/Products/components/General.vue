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
        name="name"
        rules="required|min:3|max:33"
      >
        <v-text-field
          v-model="product.name"
          :error-messages="errors"
          label="Name"
          required
          outlined
        />
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="sku"
        rules="required|min:3|max:13"
      >
        <v-text-field
          v-model="product.sku"
          :error-messages="errors"
          label="SKU"
          required
          outlined
        />
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="barcode"
        rules="required|min:12|max:13"
      >
        <v-text-field
          v-model="product.barcode"
          :error-messages="errors"
          label="Barcode"
          required
          outlined
        />
      </validation-provider>

      <validation-provider name="tax">
        <v-select
          v-model="product.tax"
          :items="taxes"
          chips
          label="Product Item Tax"
          multiple
          outlined
        />
      </validation-provider>

      <validation-provider name="tags">
        <v-select
          v-model="product.tags"
          :items="tags"
          label="Tags"
          multiple
          chips
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
  import { required, min, max } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('min', {
    ...min,
    message: 'The {_field_} field must have at least {length} characters',
  })

  extend('max', {
    ...max,
    message: 'The {_field_} field must {max} characters at most',
  })

  export default {
    name: 'ProductGeneral',
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      product: {
        name: null,
        sku: null,
        barcode: null,
        tax: [],
        tags: [],
      },
      taxes: ['VAT', 'Swiping Tax', 'Cash Tax'],
      tags: ['New', 'Featured', 'Visible Individually', 'Status'],
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.product = {
          name: null,
          sku: null,
          barcode: null,
        }
        this.$refs.observer.reset()
      },
    },
  }
</script>
