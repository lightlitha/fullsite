<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'Category',

    metaInfo: { title: 'Category' },

    extends: View,

    mixins: [LoadSectionSub(['Category::read'])],

    props: {
      id: {
        type: String,
        default: 'category',
      },
    },
  }
</script>
