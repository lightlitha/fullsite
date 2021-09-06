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
          v-model="campaign.name"
          :error-messages="errors"
          label="Name"
          required
          outlined
        />
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="Subject"
        rules="required|min:3|max:33"
      >
        <v-text-field
          v-model="campaign.subject"
          :error-messages="errors"
          label="Subject"
          required
          outlined
        />
      </validation-provider>

      <validation-provider name="event">
        <v-select
          v-model="campaign.event"
          :items="events"
          label="Events"
          outlined
        />
      </validation-provider>

      <validation-provider name="email_template">
        <v-select
          v-model="campaign.email_template"
          :items="email_templates"
          label="Email Template"
          outlined
        />
      </validation-provider>

      <validation-provider>
        <v-switch
          v-model="campaign.status"
          flat
          :label="`Active: ${campaign.status.toString()}`"
        />
      </validation-provider>

      <validation-provider name="channel">
        <v-select
          v-model="campaign.channel"
          :items="channels"
          label="Channels"
          outlined
        />
      </validation-provider>

      <validation-provider name="Customer Group">
        <v-select
          v-model="campaign.customer_group"
          :items="customer_groups"
          label="Customer Group"
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
    name: 'CampaignAdd',
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      campaign: {
        name: null,
        subject: null,
        event: null,
        email_template: null,
        status: false,
        channel: null,
        customer_group: null,
      },
      events: ['Offer Zone'],
      email_templates: ['Season 30% Sale'],
      channels: ['default'],
      customer_groups: ['Wholesales'],
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.campaign = {
          name: null,
          subject: null,
          event: null,
          email_template: null,
          status: false,
          channel: null,
          customer_group: null,
        }
        this.$refs.observer.reset()
      },
    },
  }
</script>
