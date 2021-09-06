<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'Campaigns',

    metaInfo: { title: 'Campaigns' },

    extends: View,

    mixins: [LoadSectionSub(['Campaigns::browse'])],

    props: {
      id: {
        type: String,
        default: 'campaigns',
      },
    },
  }
</script>
