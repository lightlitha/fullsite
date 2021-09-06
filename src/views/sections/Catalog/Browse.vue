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
      :items="catalogs"
      :search="search"
    >
      <!-- eslint-disable-next-line -->
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="read(item.id)"
        >
          mdi-eye
        </v-icon>

        <v-icon
          small
          @click="destroy(item.id)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  import { Catalog } from '@/core/services/data/faker'

  export default {
    name: 'CatalogBrowse',
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'No',
            align: 'start',
            sortable: true,
            value: 'id',
          },
          { text: 'Name', value: 'name' },
          { text: 'Start', value: 'start_date' },
          { text: 'End', value: 'end_date' },
          { text: 'Status', value: 'is_active' },
          { text: 'Priority', value: 'priority' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
      }
    },
    computed: {
      catalogs: () => {
        const val = Catalog
        return val
      },
    },
    methods: {
      read (item) {
        console.log(item)
        this.$router.push(
          { name: 'CatalogRead', params: { id: item } },
          onAbort => {},
        )
      },
      addnew () {
        this.$router.push({ name: 'CatalogAdd' }, onAbort => {})
      },
      destroy (item) {
        console.log(item)
      },
    },
  }
</script>
