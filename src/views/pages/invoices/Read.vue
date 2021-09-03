<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'InvoiceRead',

    metaInfo: { title: 'Invoice' },

    extends: View,

    mixins: [LoadSectionSub(['Invoices::read'])],

    props: {
      id: {
        type: String,
        default: 'invoice',
      },
    },
  }
</script>
