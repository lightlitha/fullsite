<script>
// Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/core/mixins/load-sections'

  export default {
    name: 'Login',

    metaInfo: { title: 'Login' },

    extends: View,

    mixins: [LoadSections(['login'])],

    props: {
      id: {
        type: String,
        default: 'login',
      },
    },
  }
</script>
