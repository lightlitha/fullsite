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
          <validation-provider>
            <v-menu
              ref="menufrom"
              v-model="menu_spf"
              :close-on-content-click="false"
              :return-value.sync="product.special_price_from"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="product.special_price_from"
                  label="Special Price From"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  outlined
                  v-on="on"
                />
              </template>
              <v-date-picker
                v-model="product.special_price_from"
                no-title
                scrollable
              >
                <v-spacer />
                <v-btn
                  text
                  color="primary"
                  @click="menu_spf = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menufrom.save(product.special_price_from)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </validation-provider>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <validation-provider>
            <v-menu
              ref="menufromtime"
              v-model="menu_spft"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="product.special_price_from_time"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="product.special_price_from_time"
                  label="Special Price Start Time"
                  prepend-icon="mdi-clock-time-four-outline"
                  readonly
                  v-bind="attrs"
                  outlined
                  v-on="on"
                />
              </template>
              <v-time-picker
                v-if="menu_spft"
                v-model="product.special_price_from_time"
                format="24hr"
                full-width
                @click:minute="
                  $refs.menufromtime.save(product.special_price_from_time)
                "
              />
            </v-menu>
          </validation-provider>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <validation-provider>
            <v-menu
              ref="menuto"
              v-model="menu_spt"
              :close-on-content-click="false"
              :return-value.sync="product.special_price_to"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="product.special_price_to"
                  label="Special Price To"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  outlined
                  v-on="on"
                />
              </template>
              <v-date-picker
                v-model="product.special_price_to"
                no-title
                scrollable
              >
                <v-spacer />
                <v-btn
                  text
                  color="primary"
                  @click="menu_spt = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menuto.save(product.special_price_to)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </validation-provider>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <validation-provider>
            <v-menu
              ref="menutotime"
              v-model="menu_sptt"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="product.special_price_to_time"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="product.special_price_to_time"
                  label="Special Price End Time"
                  prepend-icon="mdi-clock-time-four-outline"
                  readonly
                  v-bind="attrs"
                  outlined
                  v-on="on"
                />
              </template>
              <v-time-picker
                v-if="menu_sptt"
                v-model="product.special_price_to_time"
                format="24hr"
                full-width
                @click:minute="
                  $refs.menutotime.save(product.special_price_to_time)
                "
              />
            </v-menu>
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
          <validation-provider>
            <v-combobox
              v-model="product.customers.groups"
              :items="customer_groups"
              label="Customer Group"
              multiple
              chips
              outlined
            >
              <template v-slot:selection="data">
                <v-chip
                  :key="JSON.stringify(data.item)"
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  :disabled="data.disabled"
                  @click:close="data.parent.selectItem(data.item)"
                >
                  <v-avatar
                    class="accent white--text"
                    left
                    v-text="data.item.slice(0, 1).toUpperCase()"
                  />
                  {{ data.item }}
                </v-chip>
              </template>
            </v-combobox>
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
      menu_spf: false,
      menu_spt: false,
      menu_spft: false,
      menu_sptt: false,
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
