<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'Catalogs',

    metaInfo: { title: 'Catalogs' },

    extends: View,

    mixins: [LoadSectionSub(['Catalog::browse'])],

    props: {
      id: {
        type: String,
        default: 'catalogs',
      },
    },
  }
</script>
