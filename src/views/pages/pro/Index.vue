<script>
// Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/core/mixins/load-sections'

  export default {
    name: 'Pro',

    metaInfo: { title: 'Pro Features' },

    extends: View,

    mixins: [LoadSections(['hero-alt', 'pro-features', 'info'])],

    props: {
      id: {
        type: String,
        default: 'pro',
      },
    },
  }
</script>
