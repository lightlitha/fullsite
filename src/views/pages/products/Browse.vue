<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'Products',

    metaInfo: { title: 'Products' },

    extends: View,

    mixins: [LoadSectionSub(['Products::browse'])],

    props: {
      id: {
        type: String,
        default: 'products',
      },
    },
  }
</script>
