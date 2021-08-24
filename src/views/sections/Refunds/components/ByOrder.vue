<template>
  <v-card flat>
    <v-card-title />
    <v-data-table
      :headers="headers"
      :items="invoices"
    >
      <!-- eslint-disable-next-line -->
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="read(item.invoice_no)"
        >
          mdi-eye
        </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  import { RefundByOrder } from '@/core/services/data/refund'

  export default {
    name: 'RefundByOrder',
    data () {
      return {
        headers: [
          {
            text: 'Refund No',
            align: 'start',
            sortable: true,
            value: 'refund_no',
          },
          { text: 'Date', value: 'refund_date' },
          { text: 'Order No', value: 'order_no' },
          { text: 'Customer', value: 'customer' },
          { text: 'Status', value: 'status' },
          { text: 'Refunded', value: 'refunded' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
      }
    },
    computed: {
      invoices: () => {
        const orderNo = ''
        const val = RefundByOrder(orderNo)
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
