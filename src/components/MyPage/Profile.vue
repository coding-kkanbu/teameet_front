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
              <v-col>
                <h3>이름</h3>
                <span style="font-size: 14px; color: #c4c4c4">
                  he5330@naver.com
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
                <h5 class="mt-3">인증 여부</h5>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row class="mt-1"><v-divider class="my-6 mr-10"></v-divider></v-row>

        <v-row align="start">
          <v-col cols="3"><h4>소개글</h4></v-col>
          <v-col cols="8" class="pt-7">
            <v-row>
              <v-textarea outlined name="introduce" auto-grow></v-textarea>
            </v-row>
            <v-row justify="end" class="mt-0">
              <v-btn color="primary">변경</v-btn>
            </v-row>
          </v-col>
        </v-row>

        <v-row><v-divider class="my-6 mr-10"></v-divider></v-row>

        <v-row align="start">
          <v-col cols="3"><h4>회원정보 변경</h4></v-col>
          <v-col cols="8" class="pt-3">
            <h5 class="mb-2">닉네임 변경</h5>
            <v-text-field outlined dense></v-text-field>
            <h5 class="mb-2">비밀번호 변경</h5>
            <v-text-field outlined dense></v-text-field>
            <h5 class="mb-2">비밀번호 변경 확인</h5>
            <v-text-field outlined dense></v-text-field>

            <v-row justify="end" class="mt-0">
              <v-btn color="primary">변경</v-btn>
            </v-row>
          </v-col>
        </v-row>

        <v-row><v-divider class="my-6 mr-10"></v-divider></v-row>

        <v-row align="start">
          <v-col cols="11" class="pt-0">
            <v-row justify="end" class="mt-0">
              <v-btn color="secondary">회원탈퇴</v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<style scoped>
.v-btn {
  height: 30px;
  width: 120px;
}
</style>
