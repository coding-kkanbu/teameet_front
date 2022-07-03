<template>
  <div>
    <v-dialog v-model="dialog.login" width="553" height="600">
      <v-card class="pa-6" color="#FFFFFF">
        <v-toolbar cards flat class="my-6">
          <img class="mx-auto" src="@/assets/tm_img/tm_shy.png" width="200" />
        </v-toolbar>
        <v-form ref="loginForm" class="pa-3 pt-6">
          <v-text-field
            v-model="email"
            name="email"
            label="이메일"
            outlined
            color="primary"
          ></v-text-field>
          <v-text-field
            v-model="password"
            name="password"
            label="비밀번호"
            outlined
            color="primary"
            type="password"
          ></v-text-field>
          <v-row align="center" justify="center">
            <v-col>
              <v-checkbox color="secondary">
                <template v-slot:label>로그인을 유지합니다.</template>
              </v-checkbox>
            </v-col>
            <v-col class="text-right">
              <a href="#">이메일, 비밀번호를 잊으셨나요? </a>
            </v-col>
          </v-row>
        </v-form>
        <v-card-actions>
          <v-btn
            block
            x-large
            height="60"
            color="primary"
            depressed
            @click="save"
          >
            로그인
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
    email: '',
    password: ''
  }),
  computed: {
    ...mapState('userStore', ['dialog', 'isLogin', 'user'])
  },
  methods: {
    save () {
      api.login({ email: this.email, password: this.password })
      this.$refs.loginForm.reset()
    }
  }
}
</script>
