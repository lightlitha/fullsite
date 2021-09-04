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
        name="First Name"
        rules="required|min:3|max:33"
      >
        <v-text-field
          v-model="customer.firstname"
          :error-messages="errors"
          label="First Name"
          required
          outlined
        />
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="Last Name"
        rules="required|min:3|max:33"
      >
        <v-text-field
          v-model="customer.lastname"
          :error-messages="errors"
          label="Last Name"
          required
          outlined
        />
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="E-Mail"
        rules="required|email"
      >
        <v-text-field
          v-model="customer.email"
          :error-messages="errors"
          label="Email"
          required
          outlined
        />
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="Phone"
        rules=""
      >
        <v-text-field
          v-model="customer.phone"
          :error-messages="errors"
          label="Phone"
          required
          outlined
        />
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="Customer Group"
        rules="required"
      >
        <v-select
          v-model="customer.group"
          :items="groups"
          :error-messages="errors"
          label="Customer Group"
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
  import { required, min, max, email } from 'vee-validate/dist/rules'
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

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

  export default {
    name: 'CustomerRead',
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      customer: {
        address: {
          city: null,
          street: null,
          number: null,
          zipcode: null,
        },
        email: null,
        firstname: null,
        lastname: null,
        phone: null,
        group: 'default',
        is_active: true,
      },
      groups: ['default', 'secondary'],
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.customer = {
          address: {
            city: null,
            street: null,
            number: null,
            zipcode: null,
          },
          email: null,
          firstname: null,
          lastname: null,
          phone: null,
          group: 'default',
          is_active: true,
        }
        this.$refs.observer.reset()
      },
    },
  }
</script>
