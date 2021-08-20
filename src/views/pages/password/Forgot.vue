<script>
// Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/core/mixins/load-sections'

  export default {
    name: 'Forgot',

    metaInfo: { title: 'Forgot' },

    extends: View,

    mixins: [LoadSections(['forgot-password'])],

    props: {
      id: {
        type: String,
        default: 'forgot-password',
      },
    },
  }
</script>
