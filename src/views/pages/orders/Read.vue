<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'Order',

    metaInfo: { title: 'Order' },

    extends: View,

    mixins: [LoadSectionSub(['Orders::read'])],

    props: {
      id: {
        type: String,
        default: 'order',
      },
    },
  }
</script>
