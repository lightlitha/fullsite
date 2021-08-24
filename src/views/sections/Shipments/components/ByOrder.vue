<template>
  <v-card flat>
    <v-card-title />
    <v-data-table
      :headers="headers"
      :items="shipments"
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
  import { ShipmentByOrder } from '@/core/services/data/shipment'

  export default {
    name: 'ShipmentByOrder',
    data () {
      return {
        headers: [
          {
            text: 'Shipment No',
            align: 'start',
            sortable: true,
            value: 'shipment_no',
          },
          { text: 'Date', value: 'shipment_date' },
          { text: 'Carrier Title', value: 'carrier_title' },
          { text: 'Tracking No', value: 'tracking_no' },
          { text: 'Total Qty', value: 'qty' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
      }
    },
    computed: {
      shipments: () => {
        const orderNo = ''
        const val = ShipmentByOrder(orderNo)
        return val
      },
    },
    methods: {
      read (item) {
        console.log(item)
        this.$router.push(
          { name: 'OrderRead', params: { id: item } },
          onAbort => {},
        )
      },
    },
  }
</script>
