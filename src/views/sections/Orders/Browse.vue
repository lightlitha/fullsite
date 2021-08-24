<template>
  <v-card flat>
    <v-card-title>
      Orders
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
      :items="orders"
      :search="search"
    >
      <!-- eslint-disable-next-line -->
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="read(item.order_no)"
        >
          mdi-eye
        </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  import { OrdersBrowse } from '@/core/services/data/orders'

  export default {
    name: 'OrderBrowse',
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'No',
            align: 'start',
            sortable: true,
            value: 'order_no',
          },
          { text: 'Grand Total', value: 'grand_total' },
          { text: 'Date', value: 'order_date' },
          { text: 'Channel', value: 'order_channel' },
          { text: 'Status', value: 'status' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
      }
    },
    computed: {
      orders: () => {
        const val = OrdersBrowse()
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
