<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'NewReview',

    metaInfo: { title: 'New Review' },

    extends: View,

    mixins: [LoadSectionSub(['Review::add'])],

    props: {
      id: {
        type: String,
        default: 'newreview',
      },
    },
  }
</script>
