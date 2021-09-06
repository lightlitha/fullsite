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
          v-model="catalog.name"
          :error-messages="errors"
          label="Name"
          required
          outlined
        />
      </validation-provider>

      <validation-provider name="Description">
        <v-textarea
          v-model="catalog.description"
          outlined
          name="input-7-4"
          label="Description"
        />
      </validation-provider>

      <validation-provider name="is_active">
        <v-switch
          v-model="catalog.status"
          flat
          :label="`Is Active`"
        />
      </validation-provider>

      <validation-provider name="channels">
        <v-select
          v-model="catalog.channels"
          :items="channels"
          label="Channels"
          multiple
          chips
          outlined
        />
      </validation-provider>

      <validation-provider>
        <v-select
          v-model="catalog.customer_groups"
          :items="customer_groups"
          label="Customer Group"
          multiple
          chips
          outlined
        />
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="Coupon Code"
        rules="required|min:3|max:33"
      >
        <v-text-field
          v-model="catalog.coupon_code"
          :error-messages="errors"
          label="Coupon Code"
          required
          outlined
        />
      </validation-provider>

      <validation-provider>
        <v-select
          v-model="catalog.coupon_type"
          :items="coupon_type"
          label="Customer Group"
          multiple
          chips
          outlined
        />
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="uses_per_customer"
        rules="required|min:3|max:33"
      >
        <v-text-field
          v-model="catalog.uses_per_customer"
          :error-messages="errors"
          label="Uses Per Customer"
          required
          outlined
        />
      </validation-provider>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <validation-provider>
            <lalitha-date-picker
              v-model="catalog.start_date"
              label="Start Date"
            />
          </validation-provider>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <validation-provider>
            <lalitha-time-picker
              v-model="catalog.start_time"
              label="Catalog Start Time"
            />
          </validation-provider>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <validation-provider>
            <lalitha-date-picker
              v-model="catalog.end_date"
              label="End Date"
            />
          </validation-provider>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <validation-provider>
            <lalitha-time-picker
              v-model="catalog.end_time"
              label="Catalog End Time"
            />
          </validation-provider>
        </v-col>
      </v-row>

      <validation-provider
        v-slot="{ errors }"
        name="Priority"
        rules=""
      >
        <v-text-field
          v-model="catalog.priority"
          :error-messages="errors"
          label="Priority"
          outlined
        />
      </validation-provider>

      <validation-provider name="conditions">
        <v-select
          v-model="catalog.conditions"
          :items="conditions"
          label="Conditions"
          multiple
          chips
          outlined
        />
      </validation-provider>

      <validation-provider name="action_type">
        <v-select
          v-model="catalog.action_type"
          :items="action_type"
          label="Action Type"
          multiple
          chips
          outlined
        />
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="discount_amount"
        rules=""
      >
        <v-text-field
          v-model="catalog.discount_amount"
          :error-messages="errors"
          label="Discount Amount"
          outlined
        />
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="max_qty_discount"
        rules=""
      >
        <v-text-field
          v-model="catalog.max_qty_discount"
          :error-messages="errors"
          label="Max Qty Discount"
          outlined
        />
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="buy_x_qty"
        rules=""
      >
        <v-text-field
          v-model="catalog.buy_x_qty"
          :error-messages="errors"
          label="Buy X Qty"
          outlined
        />
      </validation-provider>

      <validation-provider name="is_apply_to_shipping">
        <v-switch
          v-model="catalog.is_apply_to_shipping"
          flat
          :label="`Apply To Shipping`"
        />
      </validation-provider>

      <validation-provider name="is_free_shipping">
        <v-switch
          v-model="catalog.is_free_shipping"
          flat
          :label="`Free Shipping`"
        />
      </validation-provider>

      <validation-provider name="end_other_rules">
        <v-switch
          v-model="catalog.end_other_rules"
          flat
          :label="`End Other Rules`"
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
  import { LalithaDatePicker, LalithaTimePicker } from '@/components/lalitha'
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
    name: 'CartRead',
    components: {
      ValidationProvider,
      ValidationObserver,
      LalithaDatePicker,
      LalithaTimePicker,
    },
    data: () => ({
      catalog: {
        name: null,
        description: null,
        status: false,
        channels: null,
        customer_groups: null,
        coupon_code: null,
        coupon_type: null,
        uses_per_customer: 1,
        start_date: null,
        end_date: null,
        start_time: null,
        end_time: null,
        priority: 0,
        conditions: [],
        action_type: null,
        discount_amount: 0,
        max_qty_discount: 1,
        buy_x_qty: 1,
        is_apply_to_shipping: false,
        is_free_shipping: false,
        end_other_rules: false,
      },
      channels: ['default'],
      customer_groups: ['Wholesale', 'Guest', 'General'],
      conditions: ['condition 1'],
      action_type: ['Percentage of Product', 'Percentage of grand total'],
      coupon_type: ['No Coupon'],
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.catalog = {
          name: null,
          description: null,
          status: false,
          channels: null,
          customer_groups: null,
          coupon_code: null,
          coupon_type: null,
          uses_per_customer: 1,
          start_date: null,
          end_date: null,
          start_time: null,
          end_time: null,
          priority: 0,
          conditions: [],
          action_type: null,
          discount_amount: 0,
          max_qty_discount: 1,
          buy_x_qty: 1,
          is_apply_to_shipping: false,
          is_free_shipping: false,
          end_other_rules: false,
        }
        this.$refs.observer.reset()
      },
    },
  }
</script>
