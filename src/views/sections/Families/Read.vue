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
          v-model="family.code"
          :error-messages="errors"
          label="Code"
          readonly
          required
          outlined
        />
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="Name"
        rules="required|min:3|max:33"
      >
        <v-text-field
          v-model="family.name"
          :error-messages="errors"
          label="Name"
          required
          outlined
        />
      </validation-provider>

      <v-row>
        <v-col
          v-for="(i, n) in attributes"
          :key="n"
          cols="12"
          sm="4"
          md="4"
        >
          <validation-provider v-if="i.optional">
            <v-checkbox
              v-model="family.attributes[n]"
              :label="`${i.name} | ${i.type}`"
            />
          </validation-provider>
          <validation-provider v-else>
            <v-checkbox
              v-model="family.attributes[n]"
              :label="`${i.name} | ${i.type}`"
              readonly
            />
          </validation-provider>
        </v-col>
      </v-row>

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
  import { Attributes } from '@/core/services/data/faker'

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
    name: 'FamilyRead',
    components: {
      ValidationProvider,
      ValidationObserver,
    },

    data: () => ({
      family: {
        code: 'default',
        name: 'Default',
        attributes: [],
      },
    }),

    computed: {
      attributes: () => {
        const val = Attributes
        return val
      },
    },

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.family = {
          code: null,
          name: null,
        }
        this.$refs.observer.reset()
      },
    },
  }
</script>
