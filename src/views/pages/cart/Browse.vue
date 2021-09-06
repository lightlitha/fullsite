<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'Carts',

    metaInfo: { title: 'Carts' },

    extends: View,

    mixins: [LoadSectionSub(['Cart::browse'])],

    props: {
      id: {
        type: String,
        default: 'carts',
      },
    },
  }
</script>
