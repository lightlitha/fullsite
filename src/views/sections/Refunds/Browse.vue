<template>
  <v-card flat>
    <v-card-title>
      Refunds
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
      :items="refunds"
      :search="search"
    >
      <!-- eslint-disable-next-line -->
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="read(item.refund_no)"
        >
          mdi-eye
        </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  import { RefundBrowse } from '@/core/services/data/refund'

  export default {
    name: 'BrowseRefunds',
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'No',
            align: 'start',
            sortable: true,
            value: 'refund_no',
          },
          { text: 'Order No', value: 'order_no' },
          { text: 'Refunded', value: 'refunded' },
          { text: 'Billed To', value: 'customer' },
          { text: 'Refund Date', value: 'refund_date' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
      }
    },
    computed: {
      refunds: () => {
        const val = RefundBrowse()
        return val
      },
    },
    methods: {
      read (item) {
        console.log(item)
        this.$router.push(
          { name: 'RefundRead', params: { id: item } },
          onAbort => {},
        )
      },
    },
  }
</script>
