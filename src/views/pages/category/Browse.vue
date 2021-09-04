<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'Categories',

    metaInfo: { title: 'Categories' },

    extends: View,

    mixins: [LoadSectionSub(['Category::browse'])],

    props: {
      id: {
        type: String,
        default: 'categories',
      },
    },
  }
</script>
