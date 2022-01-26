<template>
  <v-main>
    <!-- 두근두근 소개 -->
    <v-col cols="12">
      <v-card rounded outlined color="grey" height="387">
        <v-row class="fill-height" align="center" justify="center">
          <h1 style="font-size: 3rem" class="white--text">두근두근</h1>
        </v-row>
      </v-card>
    </v-col>

    <!-- 공지사항 -->
    <v-row align="center" justify="center">
      <v-col cols="11">
        <v-card outlined height="65">
          <v-card-title class="justify-center"
            >[공지] 에티켓 좀 지킵시다. (제에발)</v-card-title
          >
        </v-card>
      </v-col>
    </v-row>

    <!-- 셀프소개팅 -->
    <v-row align="start" justify="start">
        <v-col cols="4" v-for="post in posts" :key="post.id">
          <v-card height="200">
            <v-card-text class="pb-0">{{post.region}} | {{post.gender}} | {{post.age}}</v-card-text>
            <v-card-title class="py-1">{{post.title.substr(0,15)}}</v-card-title>
            <v-card-text >{{post.content}}</v-card-text>

            <v-card-actions class="ml-2">
              <div style="color: #a6a6a6; font-size: 12px;">
                <v-icon dense color="#A6A6A6">mdi-eye </v-icon>
                &nbsp;{{ post.hit }}&nbsp;
                <v-icon dense color="#A6A6A6">mdi-fire</v-icon>
                {{ post.like }}&nbsp;&nbsp;
                <v-icon dense color="#A6A6A6">
                  mdi-message-processing-outline
                </v-icon>
                &nbsp;{{ post.comment }}&nbsp;
                <v-icon dense color="#A6A6A6">mdi-clock</v-icon>
                {{ post.updated_at}}
              </div>
            </v-card-actions>

          </v-card>
        </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  data: () => ({
    posts: [
      {
        region: '서울',
        gender: '남',
        age: '33',
        title: '개발보다 설레는 대상을 찾았어요...',
        content: '~~',
        hit: '100',
        like: '100',
        comment: '100',
        updated_at: '2022.1.17'
      },
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
        content: '키 178에 몸무게 70정도 나가는 보통 체형입니다. 웃는 게 예쁜 분이 이상형이에요. 편하게 답글 남겨주세요!',
        hit: '100',
        like: '100',
        comment: '100',
        updated_at: '10초 전'
      }
    ]
  })
}
</script>
