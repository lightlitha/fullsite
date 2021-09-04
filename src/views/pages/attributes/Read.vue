<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'Attribute',

    metaInfo: { title: 'Attribute' },

    extends: View,

    mixins: [LoadSectionSub(['Attributes::read'])],

    props: {
      id: {
        type: String,
        default: 'attribute',
      },
    },
  }
</script>
