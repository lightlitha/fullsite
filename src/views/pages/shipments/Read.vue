<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'ShipmentsRead',

    metaInfo: { title: 'Shipments' },

    extends: View,

    mixins: [LoadSectionSub(['Shipments::read'])],

    props: {
      id: {
        type: String,
        default: 'shipments',
      },
    },
  }
</script>
