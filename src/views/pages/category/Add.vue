<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'CategoryAdd',

    metaInfo: { title: 'New Category' },

    extends: View,

    mixins: [LoadSectionSub(['Category::add'])],

    props: {
      id: {
        type: String,
        default: 'categoryadd',
      },
    },
  }
</script>
