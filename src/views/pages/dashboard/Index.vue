<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'Dashboard',

    metaInfo: { title: 'Dashboard' },

    extends: View,

    mixins: [LoadSectionSub(['Dashboard::dashboard'])],

    props: {
      id: {
        type: String,
        default: 'dashboard',
      },
    },
  }
</script>
