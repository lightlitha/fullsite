<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'EventAdd',

    metaInfo: { title: 'New Event' },

    extends: View,

    mixins: [LoadSectionSub(['Events::add'])],

    props: {
      id: {
        type: String,
        default: 'eventadd',
      },
    },
  }
</script>
