<template>
  <div>
    <v-row class="ml-2 mt-8">
      <v-col cols="3">
        <v-row justify="center">
          <v-avatar class="profile" color="grey" size="164">
            <v-img
              :src="user.profile_image"
            ></v-img>
          </v-avatar>
        </v-row>
        <v-row justify="center" class="mt-8">
          <v-btn @click="dialog.image = true" color="primary">사진 변경</v-btn>
        </v-row>
      </v-col>

      <v-col cols="9">
        <v-row align="start">
          <v-col cols="3"><h4>기본 정보</h4></v-col>
          <v-col cols="8" class="pt-0">
            <v-row>
              <v-col class="mt-3">
                <h3>{{ user.username }}</h3>
                <span style="font-size: 14px; color: #c4c4c4">
                  {{ user.email }}
                </span>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                <h5>랜덤 닉네임</h5>
                <h5 class="mt-3">가입한 날짜</h5>
                <h5 class="mt-3">작성한 글</h5>
                <h5 class="mt-3">인증 여부</h5>
              </v-col>
              <v-col style="color: #a6a6a6">
                <h5>{{ user.random_name }}</h5>
                <h5 class="mt-3">{{ user.date_joined }}</h5>
                <h5 class="mt-3">{{ user.post_n }}</h5>
                <v-row class="pa-0 ma-0" align="end">
                  <v-col class="pa-0 mx-0 mt-2">
                    <v-btn
                      v-show="!user.is_verify"
                      id="verify"
                      small
                      color="primary"
                      @click="sendEmail('verification')"
                      >인증하기</v-btn
                    >
                    <v-btn
                      v-show="user.is_verify"
                      id="verify"
                      small
                      disabled
                      color="primary"
                      >인증완료</v-btn
                    >
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row class="mt-1"><v-divider class="my-6 mr-10"></v-divider></v-row>

        <v-row align="start">
          <v-col cols="3"><h4>소개글</h4></v-col>
          <v-col cols="8" class="pt-7">
            <v-row>
              <v-textarea
                v-model="userToUpdate.introduce"
                name="introduce"
                outlined
                auto-grow
              ></v-textarea>
            </v-row>
            <v-row justify="end" class="mt-1">
              <v-btn
                color="primary"
                width="120px"
                @click="changeProfile('introduce')"
                >변경</v-btn
              >
            </v-row>
          </v-col>
        </v-row>

        <v-row><v-divider class="my-6 mr-10"></v-divider></v-row>

        <v-row align="start">
          <v-col cols="3"><h4>회원정보 변경</h4></v-col>

          <v-col cols="8" class="pt-3">
            <h5 class="mb-2">닉네임 변경</h5>
            <v-row>
              <v-col cols="9" class="pr-2">
                <v-text-field
                  ref="username"
                  name="username"
                  v-model="userToUpdate.username"
                  outlined
                  dense
                  :rules="[(v) => !!v || '닉네임을 수정하려면 입력하세요.']"
                ></v-text-field>
              </v-col>
              <v-col cols="3" class="px-0 text-right">
                <v-btn
                  color="primary"
                  width="120px"
                  @click="changeProfile('username')"
                >
                  변경
                </v-btn>
              </v-col>
            </v-row>

            <h5>비밀번호 변경</h5>
            <v-btn
              color="primary"
              class="my-3"
              width="150px"
              @click="sendEmail('password')"
              >비밀번호 변경하기</v-btn
            ><br />
            <span style="font-size: 14px"
              >가입하신 이메일 주소로 비밀번호 변경을 위한 메일을
              발송합니다.</span
            >
          </v-col>
        </v-row>

        <v-row><v-divider class="my-6 mr-10"></v-divider></v-row>

        <v-row align="start">
          <v-col cols="11" class="pt-0">
            <v-row justify="end" class="mt-1 mb-3">
              <v-btn @click="deleteUser" color="secondary"
                >회원 탈퇴</v-btn
              >
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <EmailVerification :type="type" />
    <ProfileImage />
  </div>
</template>

<script>
import EmailVerification from '@/components/MyPage/EmailVerification.vue'
import ProfileImage from '@/components/MyPage/ProfileImage.vue'
import { mapState } from 'vuex'
import api from '@/api/modules/accounts'

export default {
  components: {EmailVerification, ProfileImage},

  data: () => ({
    type: '',
    userToUpdate: {}
  }),

  computed: {
    ...mapState('userStore', ['user', 'dialog'])
  },

  async created () {
    await api.getMyDetail()
    this.userToUpdate = Object.assign({}, this.user)
  },

  methods: {
    sendEmail (type) {
      this.type = type
      this.dialog.email = true
    },

    changeProfile (kind) {
      if (kind === 'username') {
        if (!this.$refs[kind].validate()) {
          return
        }
      }
      api.updateMyInfo({ [kind]: this.userToUpdate[kind] })
    },
    deleteUser () {
      api.deleteUser()
    }
  }
}
</script>
<style scoped>
#verify {
  font-weight: bold;
  width: 75px;
  height: 20px !important;
}
.v-btn {
  height: 40px !important;
  box-shadow: none;
}
</style>
