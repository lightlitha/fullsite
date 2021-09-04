<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'Groups',

    metaInfo: { title: 'Groups' },

    extends: View,

    mixins: [LoadSectionSub(['Group::browse'])],

    props: {
      id: {
        type: String,
        default: 'groups',
      },
    },
  }
</script>
