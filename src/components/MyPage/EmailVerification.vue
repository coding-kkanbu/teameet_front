<template>
  <div>
    <v-dialog v-model="dialog.email" width="553" height="600">
      <v-card class="pa-6" color="#FFFFFF">
        <v-toolbar cards flat class="my-6">
          <img class="mx-auto" src="@/assets/tm_img/tm_shy.png" width="200" />
        </v-toolbar>
        <v-form ref="form" class="pa-3 pt-6 pb-0">
          <v-text-field
            v-model="email"
            name="email"
            :rules="emailRules"
            label="나이스 이메일 주소를 입력하세요."
            outlined
            color="primary"
            class="mt-2"
          ></v-text-field>
        </v-form>
        <v-card-actions class="px-2">
          <v-btn
            block
            x-large
            height="60"
            color="primary"
            depressed
            @click="verify"
          >
          메일 보내기
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import api from '@/api/modules/accounts'

export default {
  props: {
    type: String
  },

  data: () => ({
    email: '',
    emailRules: [
      v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || '유효한 이메일이 아닙니다.'
    ]
  }),
  computed: {
    ...mapState('userStore', ['dialog'])
  },
  methods: {
    verify () {
      if (this.$refs.form.validate()) {
        this.type === 'verification'
          ? api.verifyEmail(this, {'neis_email': this.email})
          : api.resetPassword(this, {'email': this.email})
      }
    }
  }
}
</script>
