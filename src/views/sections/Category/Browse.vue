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
      :items="categories"
      :search="search"
    >
      <!-- eslint-disable-next-line -->
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="read(item.category_no)"
        >
          mdi-eye
        </v-icon>

        <v-icon
          small
          @click="destroy(item.category_no)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  import { Category } from '@/core/services/data/faker'

  export default {
    name: 'BrowseCategory',
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
          { text: 'Status', value: 'is_active' },
          { text: 'Client Visible', value: 'visible_in_menu' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
      }
    },
    computed: {
      categories: () => {
        const val = Category
        return val
      },
    },
    methods: {
      read (item) {
        console.log(item)
        this.$router.push(
          { name: 'CategoryRead', params: { id: item } },
          onAbort => {},
        )
      },
      addnew () {
        this.$router.push({ name: 'CategoryAdd' }, onAbort => {})
      },
      destroy (item) {
        console.log(item)
      },
    },
  }
</script>
