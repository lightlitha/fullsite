<template>
  <validation-observer ref="observer">
    <validation-provider
      v-slot="{ errors }"
      :name="label"
      :rules="rules"
    >
      <v-text-field
        v-model="model"
        :error-messages="errors"
        :label="label"
        outlined
      />
    </validation-provider>
  </validation-observer>
</template>

<script>
  import { ValidationObserver, ValidationProvider } from 'vee-validate'
  export default {
    name: 'AttributesText',
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
        default: 'switcher',
      },
    },
    methods: {
      submit () {},
      clear () {},
    },
  }
</script>
