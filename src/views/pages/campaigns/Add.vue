<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'CampaignAdd',

    metaInfo: { title: 'New Campaign' },

    extends: View,

    mixins: [LoadSectionSub(['Campaigns::add'])],

    props: {
      id: {
        type: String,
        default: 'campaignadd',
      },
    },
  }
</script>
