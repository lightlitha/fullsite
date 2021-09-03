<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'Shipments',

    metaInfo: { title: 'Shipments' },

    extends: View,

    mixins: [LoadSectionSub(['Shipments::browse'])],

    props: {
      id: {
        type: String,
        default: 'shipments',
      },
    },
  }
</script>
