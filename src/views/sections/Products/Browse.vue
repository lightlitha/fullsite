<template>
  <v-card flat>
    <v-card-title>
      <v-btn
        class="ma-2"
        outlined
        color="indigo"
        @click="addnew()"
      >
        Add New
      </v-btn>
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
      :items="products"
      :search="search"
    >
      <!-- eslint-disable-next-line -->
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="read(item.product_no)"
        >
          mdi-eye
        </v-icon>

        <v-icon
          small
          @click="destroy(item.product_no)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  import { ProductBrowse } from '@/core/services/data/products'

  export default {
    name: 'BrowseProduct',
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'No',
            align: 'start',
            sortable: true,
            value: 'product_no',
          },
          { text: 'SKU', value: 'sku' },
          { text: 'Name', value: 'name' },
          { text: 'Type', value: 'type' },
          { text: 'Qty', value: 'qty' },
          { text: 'Price', value: 'price' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
      }
    },
    computed: {
      products: () => {
        const val = ProductBrowse()
        return val
      },
    },
    methods: {
      read (item) {
        console.log(item)
        this.$router.push(
          { name: 'ProductRead', params: { id: item } },
          onAbort => {},
        )
      },
      addnew () {
        this.$router.push({ name: 'ProductAdd' }, onAbort => {})
      },
      destroy (item) {
        console.log(item)
      },
    },
  }
</script>
