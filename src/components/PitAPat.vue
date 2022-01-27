<template>
  <v-main class="pt-10">
    <!-- 두근두근 소개 -->
    <v-container>
      <v-col cols="12" class="pt-0">
        <v-card outlined tile color="grey" height="387">
          <v-row class="fill-height" align="center" justify="center">
            <v-col cols="6" class="text-center white--text">
              <img
                class="shrink mx-auto mt-8"
                src="../assets/tm_img/tm_shy_white.png"
                transition="scale-transition"
                width="100"
              />
              <h1 class="mb-3" style="font-size: 3.5rem">두근두근</h1>
              <p style="font-size: 1.3rem; line-height: 40px">
                빛이 나는 Solo는 이제 그만!<br />소중한 인연을 두근두근을 통해
                찾아보세요!
              </p>
              <v-card-actions class="justify-center mt-5">
                <v-btn color="secondary" width="215" height="60" x-large>
                  소개글 올리기
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-container>

    <!-- 공지사항 -->
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="11">
          <v-card outlined tile height="65">
            <v-card-title class="justify-center">
              [공지] 에티켓 좀 지킵시다. (제에발)
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- 소개팅 카드 -->
    <v-container v-for="category in categories" :key="category.name" class="mt-1">
      <v-row align="center" justify="center">
        <v-col cols="11">
          <h2 class="mb-1 ml-1">{{ category.name }}</h2>
          <v-row align="start" justify="start">
            <v-col cols="6" v-for="post in posts" :key="post.id">
              <v-card href="postdetail" tile outlined height="186">
                <v-card-text class="pb-0">
                  {{ post.region }} | {{ post.gender }} | {{ post.age }}
                </v-card-text>
                <v-card-title class="py-1 font-weight-bold">
                  {{ post.title.substr(0, 15) }}
                </v-card-title>
                <v-card-text
                  class="black--text"
                  style="height: 70px"
                  v-text="post.content.substr(0, 100)"
                ></v-card-text>
                <v-card-actions
                  class="px-4"
                  style="color: #a6a6a6; font-size: 12px"
                >
                  <v-col cols="8" class="pa-0">
                    <v-icon dense color="#A6A6A6">mdi-eye </v-icon>
                    {{ post.hit }}
                    <v-icon dense color="#A6A6A6">mdi-fire</v-icon>
                    {{ post.like }}
                    <v-icon dense color="#A6A6A6">
                      mdi-message-processing-outline</v-icon
                    >
                    {{ post.comment }}
                  </v-col>
                  <v-col class="text-right pa-0">
                    <v-icon dense color="#A6A6A6">mdi-clock</v-icon>
                    {{ post.updated_at }}
                  </v-col>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data: () => ({
    categories: [{ name: '셀프소개팅' }, { name: '소개팅' }, { name: '미팅' }],
    posts: [
      {
        region: '전주',
        gender: '남',
        age: '29',
        title: '전주 비빔밥 좋아하시는 분?',
        content: '~~',
        hit: '100',
        like: '100',
        comment: '100',
        updated_at: '2022.1.17'
      },
      {
        region: '서울',
        gender: '남',
        age: '31',
        title: '따뜻한 남자 좋아하시는 분?',
        content:
          '키 178에 몸무게 70정도 나가는 보통 체형입니다. 웃는 게 예쁜 분이 이상형이에요. 편하게 답글 남겨주세요!',
        hit: '100',
        like: '100',
        comment: '100',
        updated_at: '10초 전'
      }
    ]
  })
}
</script>

<style scoped>
.v-btn {
  font-weight: bold;
  font-size: 1.2em;
}
</style>
