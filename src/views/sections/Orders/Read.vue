<template>
  <v-container>
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-md-8">
            <h3>Order #</h3>
          </div>
          <div class="col-md-4">
            <div
              class="btn-toolbar"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div
                class="btn-group mr-2"
                role="group"
                aria-label="First group"
              >
                <button
                  type="button"
                  class="btn btn-primary"
                >
                  Refund
                </button>
              </div>
              <div
                class="btn-group"
                role="group"
                aria-label="Second group"
              >
                <button
                  type="button"
                  class="btn btn-secondary"
                >
                  Ship
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="row">
          <v-tabs v-model="tab">
            <v-tab
              v-for="item in items"
              :key="item.url"
              :href="'#' + item.url"
            >
              {{ item.name }}
            </v-tab>
            <v-tabs-slider />
            <v-tabs-items v-model="tab">
              <v-tab-item
                v-for="item in items"
                :key="item.url"
                :value="item.url"
              >
                <keep-alive>
                  <component :is="item.comp" />
                </keep-alive>
              </v-tab-item>
            </v-tabs-items>
          </v-tabs>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'ReadOrder',
    data: () => {
      return {
        tab: null,
        items: [
          {
            url: 'info',
            name: 'Information',
            comp: () => import('@/views/sections/Orders/components/Info.vue'),
          },
          {
            url: 'invoices',
            name: 'Invoices',
            comp: () =>
            import('@/views/sections/Invoices/components/ByOrder.vue'),
          },
          {
            url: 'shipments',
            name: 'Shipments',
            comp: () =>
            import('@/views/sections/Shipments/components/ByOrder.vue'),
          },
          {
            url: 'refunds',
            name: 'Refunds',
            comp: () => import('@/views/sections/Refunds/components/ByOrder.vue'),
          },
        ],
      }
    },
  }
</script>
