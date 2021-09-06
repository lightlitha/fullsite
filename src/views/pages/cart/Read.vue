<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'Cart',

    metaInfo: { title: 'Cart' },

    extends: View,

    mixins: [LoadSectionSub(['Cart::read'])],

    props: {
      id: {
        type: String,
        default: 'cart',
      },
    },
  }
</script>
