<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'EmailTemplates',

    metaInfo: { title: 'Email Templates' },

    extends: View,

    mixins: [LoadSectionSub(['EmailTemplates::browse'])],

    props: {
      id: {
        type: String,
        default: 'emailtemplates',
      },
    },
  }
</script>
