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
        name="Price"
        rules="required|double:2"
      >
        <v-text-field
          v-model="product.price"
          :error-messages="errors"
          label="Price"
          required
          outlined
        />
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="Cost"
        rules="double:2"
      >
        <v-text-field
          v-model="product.cost"
          :error-messages="errors"
          label="Cost"
          required
          outlined
        />
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="Special Price"
        rules="double:2"
      >
        <v-text-field
          v-model="product.special_price"
          :error-messages="errors"
          label="Special Price"
          required
          outlined
        />
      </validation-provider>

      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <validation-provider name="special_from_price">
            <lalitha-date-picker
              v-model="product.special_price_from"
              label="Special Price From"
            />
          </validation-provider>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <validation-provider>
            <lalitha-time-picker
              v-model="product.special_price_from_time"
              label="Special Price Start Time"
            />
          </validation-provider>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <validation-provider>
            <lalitha-date-picker
              v-model="product.special_price_to"
              label="Special Price To"
            />
          </validation-provider>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <validation-provider>
            <lalitha-time-picker
              v-model="product.special_price_to_time"
              label="Special Price End Time"
            />
          </validation-provider>
        </v-col>
      </v-row>

      <v-subheader>
        Customer Group Pricing
      </v-subheader>
      <v-divider />

      <v-row
        v-for="(i, k) in product.customers"
        :key="k"
      >
        <v-col
          cols="12"
          md="4"
        >
          <validation-provider name="customergroup">
            <v-select
              v-model="product.customers.groups"
              :items="customer_groups"
              chips
              label="Customer Group"
              multiple
              outlined
            />
          </validation-provider>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <validation-provider
            v-slot="{ errors }"
            name="Qty"
            rules="integer"
          >
            <v-text-field
              v-model="product.customers.qty"
              :error-messages="errors"
              label="Qty"
              required
              outlined
            />
          </validation-provider>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <validation-provider
            v-slot="{ errors }"
            name="Discount"
            rules="double:2"
          >
            <v-text-field
              v-model="product.customers.disocunt"
              :error-messages="errors"
              label="Discount"
              required
              outlined
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
    name: 'ProductPrice',
    components: {
      ValidationProvider,
      ValidationObserver,
      LalithaDatePicker,
      LalithaTimePicker,
    },
    data: () => ({
      product: {
        price: null,
        cost: null,
        special_price: null,
        special_price_from: new Date(
          Date.now() - new Date().getTimezoneOffset() * 60000,
        )
          .toISOString()
          .substr(0, 10),
        special_price_to: new Date(
          Date.now() - new Date().getTimezoneOffset() * 60000,
        )
          .toISOString()
          .substr(0, 10),
        special_price_from_time: null,
        special_price_to_time: null,
        customers: [{ groups: [], qty: 1, discount: 0.0 }],
      },
      customer_groups: [
        'Bronze',
        'Silver',
        'Gold',
        'Platinum',
        'Titanium',
        'Vibranium',
      ],
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.product = {
          name: null,
          sku: null,
          barcode: null,
        }
        this.$refs.observer.reset()
      },
    },
  }
</script>
