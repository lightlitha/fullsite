<template>
  <v-menu
    ref="menu"
    v-model="menu_status"
    :close-on-content-click="false"
    :return-value.sync="actual_date"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        :value="value"
        :label="label"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        outlined
        @input="$emit('input', $event)"
        v-on="on"
      />
    </template>
    <v-date-picker
      v-model="actual_date"
      no-title
      scrollable
    >
      <v-spacer />
      <v-btn
        text
        color="primary"
        @click="menu_status = false"
      >
        Cancel
      </v-btn>
      <v-btn
        text
        color="primary"
        @click="$refs.menu.save(actual_date)"
      >
        OK
      </v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
  export default {
    name: 'LalithaDatePicker',
    props: {
      label: {
        type: String,
        description: 'Input Label',
      },
      value: {
        type: String,
        default: '',
      },
    },
    data () {
      return {
        menu_status: false,
        actual_date: null,
      }
    },
  }
</script>
