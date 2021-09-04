<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'Customers',

    metaInfo: { title: 'Customers' },

    extends: View,

    mixins: [LoadSectionSub(['Customer::browse'])],

    props: {
      id: {
        type: String,
        default: 'customers',
      },
    },
  }
</script>
