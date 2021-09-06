<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'Events',

    metaInfo: { title: 'Events' },

    extends: View,

    mixins: [LoadSectionSub(['Events::browse'])],

    props: {
      id: {
        type: String,
        default: 'events',
      },
    },
  }
</script>
