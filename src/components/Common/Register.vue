<template>
  <div>
    <v-dialog v-model="dialog.register" width="553" height="600">
      <v-card class="pa-6" color="#FFFFFF">
        <v-toolbar cards flat class="my-6">
          <img class="mx-auto" src="@/assets/tm_img/tm_shy.png" width="200" />
        </v-toolbar>
        <v-form ref="registerform" class="pa-3 pt-6 pb-0">
          <v-text-field
            v-model="postData.email"
            name="email"
            label="이메일"
            outlined
            color="primary"
          ></v-text-field>
          <v-text-field
            v-model="postData.password1"
            name="password1"
            label="비밀번호"
            outlined
            color="primary"
            type="password"
          ></v-text-field>
          <v-text-field
            v-model="postData.password2"
            name="password2"
            label="비밀번호 확인"
            outlined
            color="primary"
            type="password"
          ></v-text-field>
          <v-text-field
            v-model="postData.nickname"
            name="nickname"
            label="닉네임"
            outlined
            color="primary"
          ></v-text-field>
        </v-form>
        <v-card-actions class="px-2">
          <v-btn
            block
            x-large
            height="60"
            color="primary"
            depressed
            @click="save"
          >
            회원가입
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
  data: () => ({
    postData: {
      email: '',
      password1: '',
      password2: '',
      nickname: ''
    }
  }),
  computed: {
    ...mapState('userStore', ['dialog', 'isLogin', 'user'])
  },
  methods: {
    save () {
      api.register(this.postData)
      this.$refs.registerform.reset()
    }
  }
}
</script>
