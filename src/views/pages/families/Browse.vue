<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'Families',

    metaInfo: { title: 'Families' },

    extends: View,

    mixins: [LoadSectionSub(['Families::browse'])],

    props: {
      id: {
        type: String,
        default: 'families',
      },
    },
  }
</script>
