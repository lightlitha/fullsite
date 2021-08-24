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
  import { InvoiceByOrder } from '@/core/services/data/invoice'

  export default {
    name: 'InvoiceByOrder',
    data () {
      return {
        headers: [
          {
            text: 'Invoice No',
            align: 'start',
            sortable: true,
            value: 'invoice_no',
          },
          { text: 'Date', value: 'invoice_date' },
          { text: 'Order No', value: 'order_no' },
          { text: 'Customer', value: 'customer' },
          { text: 'Status', value: 'status' },
          { text: 'Amount', value: 'amount' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
      }
    },
    computed: {
      invoices: () => {
        const orderNo = ''
        const val = InvoiceByOrder(orderNo)
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
