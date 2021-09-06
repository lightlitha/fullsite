<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'SubscribeNewsletter',

    metaInfo: { title: 'Subscribe Newsletter' },

    extends: View,

    mixins: [LoadSectionSub(['NewsletterSubscription::add'])],

    props: {
      id: {
        type: String,
        default: 'subscribenewsletter',
      },
    },
  }
</script>
