<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'RefundRead',

    metaInfo: { title: 'Refund' },

    extends: View,

    mixins: [LoadSectionSub(['Refunds::read'])],

    props: {
      id: {
        type: String,
        default: 'refund',
      },
    },
  }
</script>
