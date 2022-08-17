<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="post in PaginatedPosts" :key="post.id" class="col-12 col-md-6">
          <v-card :href="topicUrls.read" tile outlined style="height:100%;">
            <v-card-title class="font-weight-bold" style="height:64px; line-height: 48px; overflow: hidden;">
              {{ post.title.substr(0, 25) }}
            </v-card-title>
            <v-card-text
              class="black--text"
              style="min-height: 104px;"
              v-text="post.content.substr(0, 100)"
            >
            </v-card-text>
            <v-card-text
              class="px-4"
              style="color: #a6a6a6; font-size: 12px"
            >
              <v-icon dense size="14" color="#A6A6A6">mdi-eye</v-icon>
              {{ post.hit }}
              <v-icon dense size="14" color="#A6A6A6" class="ml-2">mdi-fire</v-icon>
              {{ post.like_n }}
              <v-icon dense size="14" color="#A6A6A6" class="ml-2">
                mdi-message-processing-outline
              </v-icon>
              {{ post.comment_n }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row justify="center">
        <v-pagination
          v-model="pagination.curpageNum"
          :length="TotalPages"
          color="secondary"
          prev-icon="mdi-chevron-left"
          next-icon="mdi-chevron-right"
        ></v-pagination>
      </v-row>
    </v-container>

    <a :href="topicUrls.write">
      <img
        class="write mt-8"
        src="@/assets/tm_btn/write_topic.png"
        width="70"
      />
    </a>
  </div>
</template>

<script>
import api from '@/api/modules/post'

export default {
  data: () => ({
    categoryName: document.location.pathname.split('/').pop(),
    topicUrls: {
      read: '/topic/postdetail',
      write: '/topic/write'
    },

    pagination: {
      curpageNum: 1,
      pageSize: 8
    },

    allPostsBycategory: []
  }),

  computed: {
    TotalPages () {
      return Math.ceil(this.allPostsBycategory.length / this.pagination.pageSize)
    },

    PaginatedPosts () {
      const start = (this.pagination.curpageNum - 1) * this.pagination.pageSize
      const end = start + this.pagination.pageSize
      return this.allPostsBycategory.slice(start, end)
    }
  },

  created () {
    api.getAllPostsByCategory(this, this.categoryName)
  }
}
</script>

<style scoped>
a:hover {
  color: #d4525d;
}
</style>
