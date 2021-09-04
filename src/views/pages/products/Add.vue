<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'ProductAdd',

    metaInfo: { title: 'Product Add' },

    extends: View,

    mixins: [LoadSectionSub(['Products::add'])],

    props: {
      id: {
        type: String,
        default: 'product add',
      },
    },
  }
</script>
