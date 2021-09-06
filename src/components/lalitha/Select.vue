<template>
  <validation-observer ref="observer">
    <validation-provider
      v-slot="{ errors }"
      :name="label"
      :rules="rules"
    >
      <v-select
        v-model="model"
        :items="items"
        :label="label"
        :error-messages="errors"
        outlined
      />
    </validation-provider>
  </validation-observer>
</template>

<script>
  import { ValidationObserver, ValidationProvider } from 'vee-validate'
  export default {
    name: 'AttributesSelect',
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    props: {
      label: {
        type: String,
        default: 'Label',
      },
      rules: {
        type: String,
        default: '',
      },
      model: {
        type: String,
        default: 'select',
      },
      items: {
        type: Array,
        default: [],
      },
    },
    methods: {
      submit () {},
      clear () {},
    },
  }
</script>
