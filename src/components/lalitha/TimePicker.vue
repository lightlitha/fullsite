<template>
  <v-menu
    ref="menutime"
    v-model="menu_status"
    :close-on-content-click="false"
    :nudge-right="40"
    :return-value.sync="actual_time"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        :value="value"
        :label="label"
        prepend-icon="mdi-clock-time-four-outline"
        readonly
        v-bind="attrs"
        outlined
        @input="$emit('input', $event)"
        v-on="on"
      />
    </template>
    <v-time-picker
      v-if="menu_status"
      v-model="actual_time"
      format="24hr"
      full-width
      @click:minute="$refs.menutime.save(actual_time)"
    />
  </v-menu>
</template>

<script>
  export default {
    name: 'LalithaTimePicker',
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
        actual_time: null,
      }
    },
  }
</script>
