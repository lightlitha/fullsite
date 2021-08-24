<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'Orders',

    metaInfo: { title: 'Orders' },

    extends: View,

    mixins: [LoadSectionSub(['Orders::browse'])],

    props: {
      id: {
        type: String,
        default: 'orders',
      },
    },
  }
</script>
