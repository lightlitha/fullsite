<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'Reviews',

    metaInfo: { title: 'Reviews' },

    extends: View,

    mixins: [LoadSectionSub(['Review::browse'])],

    props: {
      id: {
        type: String,
        default: 'reviews',
      },
    },
  }
</script>
