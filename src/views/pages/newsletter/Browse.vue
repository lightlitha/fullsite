<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'Newsletters',

    metaInfo: { title: 'Newsletters' },

    extends: View,

    mixins: [LoadSectionSub(['NewsletterSubscription::browse'])],

    props: {
      id: {
        type: String,
        default: 'newsletters',
      },
    },
  }
</script>
