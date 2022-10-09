<script>
import api from '@/api/modules/accounts'

export default {
  created () {
    if (this.$route.params.site === 'google') {
      api.googleFinish(this.$route.query.code)
    } else if (this.$route.params.site === 'kakao') {
      api.kakaoFinish(this.$route.query.code)
    } else {
      this.$router.push('/')
    }
  }
}
</script>
