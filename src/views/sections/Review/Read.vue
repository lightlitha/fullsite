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
        name="Title"
        rules="required|min:3|max:33"
      >
        <v-text-field
          v-model="review.title"
          :error-messages="errors"
          label="Title"
          required
          readonly
          outlined
        />
      </validation-provider>

      <validation-provider name="Rating">
        <v-row>
          <v-col cols="12">
            <span class="grey--text text--lighten-2 text-caption mr-2">
              Rating ({{ review.rating }})
            </span>
            <v-rating
              v-model="review.rating"
              background-color="white"
              color="yellow accent-4"
              dense
              half-increments
              hover
              size="18"
            />
          </v-col>
        </v-row>
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="Status"
        rules="required"
      >
        <v-select
          v-model="review.status"
          :items="status"
          :error-messages="errors"
          label="Status"
          required
          outlined
        />
      </validation-provider>

      <validation-provider name="Comment">
        <v-textarea
          v-model="review.comment"
          outlined
          name="input-7-4"
          label="Comment"
          readonly
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
    name: 'ReviewRead',
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      review: {
        title: null,
        comment: null,
        product: null,
        status: null,
        rating: 5,
      },
      status: ['Approved', 'Pending'],
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.review = {
          title: null,
          comment: null,
          product: null,
          status: null,
          rating: 5,
        }
      },
    },
  }
</script>
