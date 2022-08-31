<template>
  <div>
    <v-container class="pt-0">
      <v-col cols="12" class="pt-0">
        <v-card outlined tile color="grey" height="387">
          <v-row class="fill-height" align="center" justify="center">
            <v-col cols="6" class="text-center white--text">
              <img
                class="mx-auto mt-8"
                src="@/assets/tm_img/tm_shy_white.png"
                width="100"
              />
              <h1 class="mb-3" style="font-size: 3.5rem">두근두근</h1>
              <p style="font-size: 1.3rem; line-height: 40px">
                빛이 나는 Solo는 이제 그만!<br />소중한 인연을 두근두근을 통해
                찾아보세요!
              </p>
              <v-card-actions class="justify-center mt-5">
                <v-btn
                  :to="{name:'pitapatWrite'}"
                  color="secondary"
                  width="215"
                  height="60"
                  x-large
                >
                  소개글 올리기
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-container>

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

    <v-container
      v-for="recentPosts in recentPostsByCategory"
      :key="recentPosts.category.name"
      class="mt-1"
    >
      <v-row align="center" justify="center">
        <v-col cols="11">
          <h2 class="mb-1 ml-1">{{ recentPosts.category.name }}</h2>
          <v-row align="start" justify="start">
            <v-col cols="6" v-for="post in recentPosts.posts" :key="post.id">
              <v-card
                :to="{ name: 'pitapatDetail', params: {subtopic: recentPosts.category.slug, postId: post.id} }"
                tile
                outlined
                height="186"
              >
                <v-card-text class="pb-0">
                  {{ post.sogaetingoption.region }} |
                  {{ post.sogaetingoption.age }}살 |
                  {{ post.sogaetingoption.gender === 1 ? "남" : "여" }}
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
                    {{ post.like_n }}
                    <v-icon dense color="#A6A6A6">
                      mdi-message-processing-outline</v-icon
                    >
                    {{ post.comment_n }}
                  </v-col>
                  <v-col class="text-right pa-0">
                    <v-icon dense color="#A6A6A6">mdi-clock</v-icon>
                    {{ post.created }}
                  </v-col>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <router-link :to="{name:'pitapatWrite'}">
      <img class="write mt-8" src="@/assets/tm_btn/write_pap.png" width="70" />
    </router-link>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import api from '@/api/modules/post'

export default {
  data: () => ({
    categories: [
      { name: '셀프소개팅', slug: 'selfsogaeting' },
      { name: '소개팅', slug: 'sogaeting' },
      { name: '미팅', slug: 'meeting' }
    ],
    recentPostsByCategory: []
  }),

  // computed: {
  //   ...mapState('postStore', ['', 'totalPages'])
  // },

  created () {
    this.categories.map((category) => {
      api.getRecentPosts(this, category)
    })
  }
}
</script>

<style scoped>
.v-btn {
  font-weight: bold;
  font-size: 1.2em;
}

a:hover {
  color: #d4525d;
}
</style>
