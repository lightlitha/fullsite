<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/core/mixins/load-sections'

  export default {
    name: 'About',

    metaInfo: { title: 'About Us' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'about-our-product',
        'info',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'about',
      },
    },
  }
</script>
