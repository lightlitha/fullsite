<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'Newsletter',

    metaInfo: { title: 'Newsletter' },

    extends: View,

    mixins: [LoadSectionSub(['NewsletterSubscription::read'])],

    props: {
      id: {
        type: String,
        default: 'newsletter',
      },
    },
  }
</script>
