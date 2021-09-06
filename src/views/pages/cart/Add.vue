<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'CartAdd',

    metaInfo: { title: 'CartAdd' },

    extends: View,

    mixins: [LoadSectionSub(['Cart::add'])],

    props: {
      id: {
        type: String,
        default: 'cartadd',
      },
    },
  }
</script>
