<script>
// Extensions
  import View from '@/views/ViewSub'

  // Mixins
  import LoadSectionSub from '@/core/mixins/load-section-sub'

  export default {
    name: 'NewEmailTemplate',

    metaInfo: { title: 'New Email Templates' },

    extends: View,

    mixins: [LoadSectionSub(['EmailTemplates::add'])],

    props: {
      id: {
        type: String,
        default: 'newemailtemplate',
      },
    },
  }
</script>
