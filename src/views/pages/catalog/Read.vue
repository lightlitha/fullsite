<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'Catalog',

    metaInfo: { title: 'Catalog' },

    extends: View,

    mixins: [LoadSectionSub(['Catalog::read'])],

    props: {
      id: {
        type: String,
        default: 'catalog',
      },
    },
  }
</script>
