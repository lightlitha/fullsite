<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'CatalogAdd',

    metaInfo: { title: 'New Catalog' },

    extends: View,

    mixins: [LoadSectionSub(['Catalog::add'])],

    props: {
      id: {
        type: String,
        default: 'catalogadd',
      },
    },
  }
</script>
