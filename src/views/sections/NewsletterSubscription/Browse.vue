<template>
  <v-card flat>
    <v-card-title>
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
      :items="newsletters"
      :search="search"
    >
      <!-- eslint-disable-next-line -->
      <template v-slot:item.actions="{ item }">
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
  import { Newsletters } from '@/core/services/data/faker'

  export default {
    name: 'NewsletterBrowse',
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
          { text: 'Subscribed', value: 'is_subscribed' },
          { text: 'Email', value: 'email' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
      }
    },
    computed: {
      newsletters: () => {
        const val = Newsletters
        return val
      },
    },
    methods: {
      destroy (item) {
        console.log(item)
      },
    },
  }
</script>
