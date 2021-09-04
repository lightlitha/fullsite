<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'Attributes',

    metaInfo: { title: 'Attributes' },

    extends: View,

    mixins: [LoadSectionSub(['Attributes::browse'])],

    props: {
      id: {
        type: String,
        default: 'attributes',
      },
    },
  }
</script>
