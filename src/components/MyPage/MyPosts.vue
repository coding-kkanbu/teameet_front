<template>
  <div>
    <v-container v-for="post in posts" :key="post.id">
      <v-row class="ml-10 mt-8">
        <v-col cols="1" class="mr-5">
          <v-avatar class="profile" color="grey" size="50">
            <v-img
              src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
            ></v-img>
          </v-avatar>
        </v-col>
        <v-col cols="10">
          <v-row
            align="center"
            justify="start"
            style="color: #a6a6a6; font-size: 12px"
          >
            {{ post.category }}
          </v-row>
          <v-row>
            <v-col cols="9" class="px-0">{{ post.title.substr(0, 40) }}</v-col>
            <v-col cols="3" class="text-right pr-0" style="color: #a6a6a6; font-size: 12px">
              <v-icon dense size="14" color="#A6A6A6">mdi-eye</v-icon>
              {{ post.hit }}
              <v-icon dense size="14" color="#A6A6A6" class="ml-2"
                >mdi-fire</v-icon
              >
              {{ post.like }}
              <v-icon dense size="14" color="#A6A6A6" class="ml-2">
                mdi-message-processing-outline
              </v-icon>
              {{ post.comment }}
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row><v-divider class="mx-8"></v-divider> </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    posts: [
      {
        id: 1,
        category: '토픽 > 헬스다이어트',
        title: '따뜻한 남자 좋아하시는 분?',
        updated_at: '2022.1.17',
        hit: 900,
        like: 30,
        comment: 100
      },
      {
        id: 2,
        category: '토픽 > 헬스다이어트',
        title: '따뜻한 남자 좋아하시는 분?',
        updated_at: '2022.1.17',
        hit: 900,
        like: 30,
        comment: 100
      },
      {
        id: 3,
        category: '토픽 > 헬스다이어트',
        title: '따뜻한 남자 좋아하시는 분@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@?',
        updated_at: '2022.1.17',
        hit: 900,
        like: 30,
        comment: 100
      }
    ]
  })
}
</script>
