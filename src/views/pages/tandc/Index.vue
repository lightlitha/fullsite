<script>
// Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/core/mixins/load-sections'

  export default {
    name: 'TAndC',

    metaInfo: { title: "T's & C's" },

    extends: View,

    mixins: [LoadSections(['t-and-c'])],

    props: {
      id: {
        type: String,
        default: 't-and-c',
      },
    },
  }
</script>
