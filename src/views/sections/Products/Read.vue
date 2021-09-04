<template>
  <div>
    <div class="row">
      <div class="col-md-8">
        <h3>Product #</h3>
      </div>
    </div>
    <v-stepper
      v-model="e1"
      vertical
    >
      <template v-for="n in steps">
        <v-stepper-step
          :key="`${n.id}-step`"
          :complete="e1 > n.id"
          :step="n.id"
          editable
        >
          {{ n.name }}
        </v-stepper-step>

        <v-stepper-content
          :key="`${n.id}-content`"
          :step="n.id"
        >
          <keep-alive>
            <component :is="n.comp" />
          </keep-alive>
          <v-row>
            <v-col
              offset="6"
              offset-md="10"
            >
              <v-btn
                right
                color="primary"
                @click="nextStep(n.id)"
              >
                Next
              </v-btn>
            </v-col>
          </v-row>
        </v-stepper-content>
      </template>
    </v-stepper>
  </div>
</template>

<script>
  export default {
    name: 'ReadProduct',
    data () {
      return {
        e1: 1,
        steps: [
          {
            id: 1,
            name: 'General',
            comp: () =>
            import('@/views/sections/Products/components/General.vue'),
          },
          {
            id: 2,
            name: 'Description',
            comp: () => import('@/views/sections/Products/components/Description.vue'),
          },
          {
            id: 3,
            name: 'Price',
            comp: () => import('@/views/sections/Products/components/Price.vue'),
          },
          {
            id: 4,
            name: 'Shipping',
            comp: () =>
            import('@/views/sections/Products/components/Shipping.vue'),
          },
          {
            id: 5,
            name: 'Inventory',
            comp: () =>
            import('@/views/sections/Products/components/Inventory.vue'),
          },
          {
            id: 6,
            name: 'Category',
            comp: () =>
            import('@/views/sections/Products/components/Category.vue'),
          },
          {
            id: 7,
            name: 'Images',
            comp: () => import('@/views/sections/Products/components/Images.vue'),
          },
          {
            id: 8,
            name: 'Channels',
            comp: () =>
            import('@/views/sections/Products/components/Channels.vue'),
          },
          {
            id: 9,
            name: 'Linked Products',
            comp: () =>
            import('@/views/sections/Products/components/LinkedProducts.vue'),
          },
        ],
      }
    },

    watch: {
      steps (val) {
        if (this.e1 > val) {
          this.e1 = val
        }
      },
    },

    methods: {
      nextStep (n) {
        if (n === this.steps) {
          this.e1 = 1
        } else {
          this.e1 = n + 1
        }
      },
    },
  }
</script>
