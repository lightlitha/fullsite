<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'Group',

    metaInfo: { title: 'Group' },

    extends: View,

    mixins: [LoadSectionSub(['Group::read'])],

    props: {
      id: {
        type: String,
        default: 'group',
      },
    },
  }
</script>
