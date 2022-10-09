<template>
  <div>
    <v-dialog v-model="dialog.login" width="480" height="600">
      <v-card class="pa-3" color="#FFFFFF">
        <v-toolbar cards flat class="my-1">
          <img class="mx-auto" src="@/assets/tm_img/tm_shy.png" width="100" />
        </v-toolbar>
        <v-form ref="loginForm" class="pa-1 pt-2">
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
              <v-checkbox color="secondary" v-model="remember">
                <template v-slot:label>로그인을 유지합니다.</template>
              </v-checkbox>
            </v-col>
            <v-col class="text-right" style="font-size:0.9rem">
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
        <div
            class="primary--text py-3"
            style="
              font-size:0.9rem;
              text-align:center;"
            >
            또는 다음 계정으로 로그인
        </div>
        <v-row dense class="my-2">
          <v-col cols="6">
            <v-btn @click="google" text width="80" class="ma-0 pa-0">
              <img style="width: 85%" src="/static/google.svg" />
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn @click="kakao" text width="80" class="ma-0 pa-0">
              <img style="width: 85%" src="/static/kakao.svg" />
            </v-btn>
          </v-col>
        </v-row>
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
    password: '',
    remember: false
  }),
  computed: {
    ...mapState('userStore', ['dialog', 'isLogin', 'user'])
  },
  methods: {
    save () {
      api.login({ email: this.email, password: this.password }, this.remember)
      this.$refs.loginForm.reset()
    },
    google () {
      api.google()
    },

    kakao () {
      api.kakao()
    }
  }
}
</script>
