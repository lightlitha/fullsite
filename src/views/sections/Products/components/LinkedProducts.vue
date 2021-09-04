<template>
  <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <form
      class="p-2"
      @submit.prevent="submit"
    >
      <validation-provider>
        <v-combobox
          v-model="product.upselling"
          :items="products"
          label="Up Selling"
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

      <validation-provider>
        <v-combobox
          v-model="product.crossselling"
          :items="products"
          label="Cross Selling"
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

      <validation-provider>
        <v-combobox
          v-model="product.related"
          :items="products"
          label="Related Products"
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
  import { ValidationObserver, ValidationProvider } from 'vee-validate'

  export default {
    name: 'ProductLinkedProducts',
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      product: { crossselling: null, related: null, upselling: null },
      products: ['Jean', 'Drink', 'Denum', 'Bit'],
    }),
    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.product = { crossselling: null, related: null, upselling: null }
        this.$refs.observer.reset()
      },
    },
  }
</script>
