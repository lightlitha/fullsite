<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'Product',

    metaInfo: { title: 'Product' },

    extends: View,

    mixins: [LoadSectionSub(['Products::read'])],

    props: {
      id: {
        type: String,
        default: 'product',
      },
    },
  }
</script>
