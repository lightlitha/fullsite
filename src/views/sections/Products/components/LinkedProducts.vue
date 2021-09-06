<template>
  <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <form
      class="p-2"
      @submit.prevent="submit"
    >
      <validation-provider>
        <v-select
          v-model="product.upselling"
          :items="products"
          label="Up Selling"
          chips
          multiple
          outlined
        />
      </validation-provider>

      <validation-provider>
        <v-select
          v-model="product.crossselling"
          :items="products"
          label="Cross Selling"
          chips
          multiple
          outlined
        />
      </validation-provider>

      <validation-provider>
        <v-select
          v-model="product.related"
          :items="products"
          label="Related Products"
          chips
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
    name: 'ProductLinkedProducts',
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      product: { crossselling: null, related: null, upselling: null },
      products: ['Jean', 'Drink', 'Denum', 'Bit'],
    }),
    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.product = { crossselling: null, related: null, upselling: null }
        this.$refs.observer.reset()
      },
    },
  }
</script>
