<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'Refunds',

    metaInfo: { title: 'Refunds' },

    extends: View,

    mixins: [LoadSectionSub(['Refunds::browse'])],

    props: {
      id: {
        type: String,
        default: 'refunds',
      },
    },
  }
</script>
