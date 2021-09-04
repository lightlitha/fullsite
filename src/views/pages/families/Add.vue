<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'FamilyAdd',

    metaInfo: { title: 'New Family' },

    extends: View,

    mixins: [LoadSectionSub(['Families::add'])],

    props: {
      id: {
        type: String,
        default: 'familyadd',
      },
    },
  }
</script>
