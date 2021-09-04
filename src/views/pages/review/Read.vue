<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'Review',

    metaInfo: { title: 'Review' },

    extends: View,

    mixins: [LoadSectionSub(['Review::read'])],

    props: {
      id: {
        type: String,
        default: 'review',
      },
    },
  }
</script>
