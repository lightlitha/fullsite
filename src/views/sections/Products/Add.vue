<template>
  <v-container>
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
          name="Name"
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
          name="SKU"
          rules="required|min:3|max:33"
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
          name="Product Type"
          rules="required"
        >
          <v-select
            v-model="product.type"
            :error-messages="errors"
            :items="prodtypes"
            required
            label="Product Type"
            outlined
          />
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          name="Attribute Family"
          rules="required"
        >
          <v-select
            v-model="product.family"
            :error-messages="errors"
            :items="attfam"
            required
            label="Attribute Family"
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
  </v-container>
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
    name: 'ProductAdd',
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      product: {
        name: null,
        sku: null,
        type: null,
        family: null,
      },
      prodtypes: ['Simple', 'Virtual', 'Download'],
      attfam: ['Perishable', 'Doomsday', 'Survival', 'Style'],
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
        this.$router.push({ name: 'ProductRead' }, onAbort => {})
      },
      clear () {
        this.product = {
          name: null,
          sku: null,
          type: null,
          family: null,
        }
        this.$refs.observer.reset()
      },
    },
  }
</script>
