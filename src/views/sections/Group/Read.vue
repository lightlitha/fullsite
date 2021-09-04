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
        name="Code"
        rules="required|min:3|max:33"
      >
        <v-text-field
          v-model="group.code"
          :error-messages="errors"
          label="Code"
          required
          readonly
          outlined
        />
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="Name"
        rules="required|min:3|max:33"
      >
        <v-text-field
          v-model="group.name"
          :error-messages="errors"
          label="Name"
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
    name: 'GroupRead',
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      group: {
        name: null,
        code: null,
      },
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.group = {
          name: null,
          code: null,
        }
        this.$refs.observer.reset()
      },
    },
  }
</script>
