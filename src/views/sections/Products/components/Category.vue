<template>
  <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <form
      class="p-2"
      @submit.prevent="submit"
    >
      <validation-provider name="Categories">
        <v-list shaped>
          <v-list-item-group
            v-model="model"
            multiple
          >
            <template v-for="(item, i) in items">
              <v-divider
                v-if="!item"
                :key="`divider-${i}`"
              />

              <v-list-item
                v-else
                :key="`item-${i}`"
                :value="item"
                active-class="deep-purple--text text--accent-4"
              >
                <template v-slot:default="{ active }">
                  <v-list-item-content>
                    <v-list-item-title v-text="item" />
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-checkbox
                      :input-value="active"
                      color="deep-purple accent-4"
                    />
                  </v-list-item-action>
                </template>
              </v-list-item>
            </template>
          </v-list-item-group>
        </v-list>
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
    name: 'ProductCategory',
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      items: ['Men', 'Women', '', 'Kids', 'Babies'],
      model: ['Carrots'],
    }),
    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.product = { stock: null }
        this.$refs.observer.reset()
      },
    },
  }
</script>
