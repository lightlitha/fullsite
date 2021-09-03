<template>
  <v-card flat>
    <v-card-title>
      Shipments
      <v-spacer />
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      />
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="shipments"
      :search="search"
    >
      <!-- eslint-disable-next-line -->
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="read(item.shipment_no)"
        >
          mdi-eye
        </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  import { ShipmentBrowse } from '@/core/services/data/shipment'

  export default {
    name: 'ShipmentBrowse',
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'No',
            align: 'start',
            sortable: true,
            value: 'shipment_no',
          },
          { text: 'Order No', value: 'order_no' },
          { text: 'Qty', value: 'qty' },
          { text: 'Inventory', value: 'inventory_source' },
          { text: 'Order Date', value: 'order_date' },
          { text: 'Shipment Date', value: 'shipment_date' },
          { text: 'Shipping To', value: 'shipping_to' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
      }
    },
    computed: {
      shipments: () => {
        const val = ShipmentBrowse()
        return val
      },
    },
    methods: {
      read (item) {
        console.log(item)
        this.$router.push(
          { name: 'ShipmentRead', params: { id: item } },
          onAbort => {},
        )
      },
    },
  }
</script>
