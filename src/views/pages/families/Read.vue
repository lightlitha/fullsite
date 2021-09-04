<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'Family',

    metaInfo: { title: 'Family' },

    extends: View,

    mixins: [LoadSectionSub(['Families::read'])],

    props: {
      id: {
        type: String,
        default: 'family',
      },
    },
  }
</script>
