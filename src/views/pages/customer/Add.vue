<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'CustomerAdd',

    metaInfo: { title: 'New Customer' },

    extends: View,

    mixins: [LoadSectionSub(['Customer::add'])],

    props: {
      id: {
        type: String,
        default: 'customeradd',
      },
    },
  }
</script>
