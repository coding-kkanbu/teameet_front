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
                <h3>{{ me.nickname }}</h3>
                <span style="font-size: 14px; color: #c4c4c4">
                  {{ me.email }}
                </span>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3">
                <h5>가입한 날짜</h5>
                <h5 class="mt-3">작성한 글</h5>
                <h5 class="mt-3">인증 여부</h5>
              </v-col>
              <v-col>
                <h5>가입한 날짜</h5>
                <h5 class="mt-3">작성한 글</h5>
                <v-row class="pa-0 ma-0" align="end">
                  <h5 class="mt-3">{{ me.is_verify }}</h5>
                  <v-col
                    v-show="!me.is_verify"
                    cols="2"
                    class="text-right pa-0"
                  >
                    <v-btn id="verify" small color="secondary">인증</v-btn>
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
                v-model="me.introduce"
                name="introduce"
                outlined
                auto-grow
              ></v-textarea>
            </v-row>
            <v-row justify="end" class="mt-2">
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
            <span style="font-size:14px;">가입하신 이메일 주소로 비밀번호 변경을 위한 메일을 발송합니다.</span>
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
    me: {
      email: 'user@example.com',
      nickname: '승쨩',
      random_name: 'string',
      profile_image: 'string',
      is_verify: false,
      introduce: '기존 소개글이 여기에 나타납니다.'
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
  width: 50px;
  height: 20px !important;
}
.v-btn {
  height: 40px !important;
  box-shadow: none;
}
</style>
