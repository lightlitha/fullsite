<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'Invoices',

    metaInfo: { title: 'Invoices' },

    extends: View,

    mixins: [LoadSectionSub(['Invoices::browse'])],

    props: {
      id: {
        type: String,
        default: 'invoices',
      },
    },
  }
</script>
