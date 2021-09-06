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
          v-model="event.name"
          :error-messages="errors"
          label="Name"
          required
          outlined
        />
      </validation-provider>

      <validation-provider name="Description">
        <v-textarea
          v-model="event.description"
          outlined
          name="input-7-4"
          label="Description"
        />
      </validation-provider>

      <validation-provider name="date">
        <lalitha-date-picker
          v-model="event.date"
          label="Date"
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
  import { LalithaDatePicker } from '@/components/lalitha'
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
    name: 'EventRead',
    components: {
      ValidationProvider,
      ValidationObserver,
      LalithaDatePicker,
    },
    data: () => ({
      event: {
        name: null,
        description: null,
        date: null,
      },
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.event = {
          name: null,
          description: null,
          date: null,
        }
        this.$refs.observer.reset()
      },
    },
  }
</script>
