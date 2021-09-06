<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'EmailTemplate',

    metaInfo: { title: 'Email Template' },

    extends: View,

    mixins: [LoadSectionSub(['EmailTemplates::read'])],

    props: {
      id: {
        type: String,
        default: 'emailtemplate',
      },
    },
  }
</script>
