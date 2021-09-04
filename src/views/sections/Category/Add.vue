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
          v-model="category.name"
          :error-messages="errors"
          label="Name"
          required
          outlined
        />
      </validation-provider>

      <validation-provider name="Is Active">
        <v-switch
          v-model="category.is_active"
          flat
          :label="`Is Active: ${category.is_active.toString()}`"
        />
      </validation-provider>

      <validation-provider name="Client Visible">
        <v-switch
          v-model="category.visible_in_menu"
          flat
          :label="`Client Visible: ${category.visible_in_menu.toString()}`"
        />
      </validation-provider>

      <validation-provider name="Description">
        <v-textarea
          v-model="category.description"
          outlined
          name="input-7-4"
          label="Description"
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
    name: 'CategoryAdd',
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      category: {
        name: null,
        is_active: false,
        visible_in_menu: false,
        description: null,
      },
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.category = {
          name: null,
          is_active: null,
          visible_in_menu: null,
          description: null,
        }
        this.$refs.observer.reset()
      },
    },
  }
</script>
