<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'Campaign',

    metaInfo: { title: 'Campaign' },

    extends: View,

    mixins: [LoadSectionSub(['Campaigns::read'])],

    props: {
      id: {
        type: String,
        default: 'campaign',
      },
    },
  }
</script>
