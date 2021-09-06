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
        name="Name"
        rules="required|min:3|max:33"
      >
        <v-text-field
          v-model="email_template.name"
          :error-messages="errors"
          label="Name"
          required
          outlined
        />
      </validation-provider>

      <validation-provider>
        <v-switch
          v-model="email_template.status"
          label="Status"
          outlined
        />
      </validation-provider>

      <validation-provider>
        <v-textarea
          v-model="email_template.content"
          label="Content"
          outlined
          name="input-7-4"
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
    name: 'EmailTemplateRead',
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      email_template: {
        name: null,
        status: null,
        content: null,
      },
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.email_template = {
          name: null,
          status: null,
          content: null,
        }
        this.$refs.observer.reset()
      },
    },
  }
</script>
