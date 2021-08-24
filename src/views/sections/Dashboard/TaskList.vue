<template>
  <black-table
    :data="tableData"
    thead-classes="text-primary"
  >
    <template slot-scope="{ row }">
      <td>
        <black-checkbox v-model="row.done" />
      </td>
      <td>
        <p class="title">
          {{ row.title }}
        </p>
        <p class="text-muted">
          {{ row.description }}
        </p>
      </td>
      <td class="td-actions text-right">
        <black-button
          type="link"
          aria-label="edit button"
        >
          <i class="tim-icons icon-pencil" />
        </black-button>
      </td>
    </template>
  </black-table>
</template>
<script>
  import { BlackTable } from '@/components/black'
  export default {
    components: {
      BlackTable,
    },
    computed: {
      tableData () {
        return this.$t('dashboard.taskList')
      },
    },
  }
</script>
<style></style>
