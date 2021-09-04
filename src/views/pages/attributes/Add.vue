<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'AttributeAdd',

    metaInfo: { title: 'New Attribute' },

    extends: View,

    mixins: [LoadSectionSub(['Attributes::add'])],

    props: {
      id: {
        type: String,
        default: 'attributeadd',
      },
    },
  }
</script>
