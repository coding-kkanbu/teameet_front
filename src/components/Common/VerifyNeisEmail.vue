<script>
import api from '@/api/modules/accounts'

export default {
  created () {
    api.confirmVerifyEmail(this.$route.query.uid, this.$route.query.token)
  }
}
</script>
