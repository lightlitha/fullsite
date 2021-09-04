<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'Customer',

    metaInfo: { title: 'Customer' },

    extends: View,

    mixins: [LoadSectionSub(['Customer::read'])],

    props: {
      id: {
        type: String,
        default: 'customer',
      },
    },
  }
</script>
