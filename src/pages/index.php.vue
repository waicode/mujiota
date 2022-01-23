<script>
export default {
  name: 'MujiotaIndexPhpRedirectPage',
  asyncData({ redirect }) {
    redirect(301, `/`)
  },
}
</script>
