<template>
  <div>
    <v-row class="ml-2 mt-8">
      <v-col cols="3">
        <v-row justify="center">
          <v-avatar class="profile" color="grey" size="164">
            <v-img
              src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
            ></v-img>
          </v-avatar>
        </v-row>
        <v-row justify="center" class="mt-8">
          <v-btn color="primary">사진 변경</v-btn>
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
                <h5 class="mt-3">{{ user.created_at }}</h5>
                <h5 class="mt-3">{{ user.posts }}</h5>
                <v-row class="pa-0 ma-0" align="end">
                  <v-col class="pa-0 mx-0 mt-2">
                    <v-btn
                      v-show="!user.is_verify"
                      id="verify"
                      small
                      color="primary"
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
                v-model="user.introduce"
                name="introduce"
                outlined
                auto-grow
              ></v-textarea>
            </v-row>
            <v-row justify="end" class="mt-1">
              <v-btn color="primary" width="120px" @click="change(introduce)"
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
                  id="nicknamechgForm"
                  ref="nicknameForm"
                  name="nickname"
                  v-model="filled"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="3" class="px-0 text-right">
                <v-btn
                  color="primary"
                  :disabled="!filled"
                  width="120px"
                  @click="change(nickname)"
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
              @click="change(pwd)"
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
              <v-btn color="secondary">회원 탈퇴</v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data: () => ({
    user: {
      email: 'user@example.com',
      nickname: '승쨩',
      random_name: '지각한북극곰',
      profile_image: 'string',
      created_at: '2022-02-02',
      is_verify: false,
      introduce: '기존 소개글이 여기에 나타납니다.',
      posts: 38
    },

    filled: ''
  })

  //   methods: {
  //     change (kind) {
  //       console.log('save()...', kind)
  //       if (kind === 'pwd') {
  //         this.pwdchg()
  //         this.$refs.pwdchgForm.reset()
  //       }
  //     },
  //     pwdchg () {
  //       console.log('pwdchg()...')
  //       const postData = new FormData(document.getElementById('pwdchgForm'))
  //       axios
  //         .post('/accounts/password/change/', postData)
  //         .then((res) => {
  //           console.log('PASSWORD CHANGE POST RES', res)
  //           alert('비밀번호가 변경되었습니다.')
  //         })
  //         .catch((err) => {
  //           console.log('PASSWORD CHANGE POST ERR.RESPONSE', err.response)
  //           alert('비밀번호 변경을 실패하였습니다.')
  //         })
  //     }
  //   }
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
