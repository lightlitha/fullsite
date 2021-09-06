<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'Event',

    metaInfo: { title: 'Event' },

    extends: View,

    mixins: [LoadSectionSub(['Events::read'])],

    props: {
      id: {
        type: String,
        default: 'event',
      },
    },
  }
</script>
