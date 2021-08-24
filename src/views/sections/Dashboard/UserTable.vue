<template>
  <black-table
    :data="table.data"
    :columns="table.columns"
    thead-classes="text-primary"
  />
</template>
<script>
  import { BlackTable } from '@/components/black'
  export default {
    components: {
      BlackTable,
    },
    computed: {
      table () {
        return this.$t('dashboard.usersTable')
      },
    },
  }
</script>
<style></style>
