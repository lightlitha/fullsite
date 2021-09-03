<template>
  <v-card flat>
    <v-card-title>
      Invoices
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
      :items="invoices"
      :search="search"
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
  import { InvoiceBrowse } from '@/core/services/data/invoice'

  export default {
    name: 'BrowseInvoice',
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'No',
            align: 'start',
            sortable: true,
            value: 'invoice_no',
          },
          { text: 'Order No', value: 'order_no' },
          { text: 'Grand Total', value: 'amount' },
          { text: 'Invoice Date', value: 'invoice_date' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
      }
    },
    computed: {
      invoices: () => {
        const val = InvoiceBrowse()
        return val
      },
    },
    methods: {
      read (item) {
        console.log(item)
        this.$router.push(
          { name: 'InvoiceRead', params: { id: item } },
          onAbort => {},
        )
      },
    },
  }
</script>
