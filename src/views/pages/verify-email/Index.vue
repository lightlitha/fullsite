<script>
// Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/core/mixins/load-sections'

  export default {
    name: 'VerifyEmail',

    metaInfo: { title: 'Verify Email' },

    extends: View,

    mixins: [LoadSections(['verify-email'])],

    props: {
      id: {
        type: String,
        default: 'verify-email',
      },
    },
  }
</script>
