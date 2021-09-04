<template>
  <validation-observer ref="observer">
    <validation-provider
      v-slot="{ errors }"
      :name="label"
      :rules="rules"
    >
      <v-checkbox
        v-model="model"
        :label="label"
        :error-messages="errors"
      />
    </validation-provider>
  </validation-observer>
</template>

<script>
  import { ValidationObserver, ValidationProvider } from 'vee-validate'
  export default {
    name: 'AttributesCheckbox',
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
        default: 'checkbox',
      },
    },
    methods: {
      submit () {},
      clear () {},
    },
  }
</script>
