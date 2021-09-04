<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'GroupAdd',

    metaInfo: { title: 'New Group' },

    extends: View,

    mixins: [LoadSectionSub(['Group::add'])],

    props: {
      id: {
        type: String,
        default: 'groupadd',
      },
    },
  }
</script>
