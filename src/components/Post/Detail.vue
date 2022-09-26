<template>
  <div class="pt-5">
    <v-container>
      <v-row>
        <v-col cols="8">
          <v-row align="start" justify="start">
            <v-card elevation="0" width="100%">
              <v-card-subtitle class="primary--text font-weight-bold">
                {{ app === "pitapat" ? "두근두근" : "토픽" }} >
                {{ post.category_set.name }}
              </v-card-subtitle>
              <v-card-text
                v-if="app === 'pitapat'"
                class="pb-0 black--text font-weight-bold"
              >
                {{ post.sogaetingoption.region }} |
                {{ post.sogaetingoption.age }}살 |
                {{ post.sogaetingoption.gender === 1 ? "남" : "여" }}
              </v-card-text>
              <v-card-title class="font-weight-bold">
                {{ post.title }}
              </v-card-title>
              <v-card-text color="#A6A6A6">
                <v-row align="end">
                  <v-col>
                    {{ post.writer.username }}<br />
                    <v-icon dense color="#A6A6A6">mdi-clock</v-icon>
                    &nbsp;&nbsp;{{ post.created }}&nbsp;
                    <v-icon dense color="#A6A6A6">mdi-eye</v-icon>
                    &nbsp;&nbsp;{{ post.hit }}
                  </v-col>
                  <v-col class="text-right mr-1">
                    <v-btn icon><v-icon>mdi-dots-horizontal</v-icon></v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-row>

          <v-row align="start" justify="start">
            <v-card elevation="0" width="100%">
              <v-card-text class="black--text">{{ post.content }}</v-card-text>
              <v-card-text>
                <v-row align="center">
                  <v-col style="font-size: 15px; font-weight: bold">
                    <v-icon color="secondary">mdi-fire</v-icon>
                    <span style="color: #d4525d">{{ post.like }}</span
                    >&nbsp;&nbsp;&nbsp;&nbsp;
                    <v-icon color="#A6A6A6"
                      >mdi-message-processing-outline</v-icon
                    >
                    <span style="color: #a6a6a6">{{ post.comment }}</span>
                  </v-col>

                  <v-col v-if="app === 'pitapat'" class="text-right">
                    <v-btn
                      @click="connected"
                      color="secondary"
                      elevation="0"
                      :disabled="post.sogaetingoption.connected"
                      >연결 완료</v-btn
                    >
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
            <v-divider color="#A6A6A6" class="mx-2"></v-divider>
          </v-row>
        </v-col>

        <v-col cols="4">
          <v-card outlined>
            <v-card-title class="primary--text font-weight-bold">
              {{ post.category_set.name }} 추천 글
            </v-card-title>
            <v-list dense>
              <v-list-item-group>
                <v-list-item v-for="(hotpost, i) in hotposts" :key="i">
                  <v-list-item-icon>
                    <v-icon color="primary">mdi-circle-small</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-subtitle
                      v-text="hotpost"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>

          <v-card class="mt-3" outlined>
            <v-card-title class="primary--text font-weight-bold"
              >TAGS</v-card-title
            >
            <v-chip-group active-class="primary--text" column>
              <v-chip
                v-for="(tag, index) in post.tags"
                :key="tag"
                class="ma-2 font-weight-bold"
                color="primary"
                text-color="white"
              >
                <v-avatar left class="white primary--text font-weight-bold">
                  {{ index + 1 }}
                </v-avatar>
                {{ tag }}
              </v-chip>
            </v-chip-group>
          </v-card>

          <v-card class="mt-3" outlined> image </v-card>
        </v-col>
      </v-row>

      <v-row align="start" justify="start">
        <v-col cols="6">
          <v-textarea
            v-model="createComment.comment"
            outlined
            label="댓글을 등록하세요"
            auto-grow
          ></v-textarea>
        </v-col>
        <v-col cols="2" class="ml-0">
          <v-btn @click="writeComment" class="comment_submit_btn" outlined block height="130"
            >등록하기</v-btn
          >
        </v-col>
      </v-row>

      <v-row align="start" justify="start">
        <v-col cols="8" v-for="comment in comments" :key="comment.id">
          <v-card elevation="0">
            <v-card-title>{{ comment.writer.username }}</v-card-title>
            <v-card-text class="black--text">{{ comment.comment }}</v-card-text>
            <v-card-text>
              <div style="font-size: 12px">
                <v-icon color="#A6A6A6">mdi-clock</v-icon>
                <span style="color: #a6a6a6"> {{ comment.created }}</span
                >&nbsp;&nbsp;&nbsp;&nbsp;
                <v-icon color="secondary">mdi-fire</v-icon>
                <span style="color: #d4525d">{{ comment.commentlike_n }}</span>
              </div>
            </v-card-text>
            <!-- <v-card
              color="#F5F6F8"
              class="pl-8"
              elevation="0"
              v-for="reply in comment.reply"
              :key="reply.id"
            >
              <v-card-title>{{ reply.owner }}</v-card-title>
              <v-card-text class="black--text">
                <span style="color: #589290; font-weight: bold">
                  @{{ comment.owner }}
                </span>
                {{ reply.content }}
              </v-card-text>
              <v-card-text>
                <div style="font-size: 12px">
                  <v-icon color="#A6A6A6">mdi-clock</v-icon>
                  <span style="color: #a6a6a6"> {{ reply.created_at }}</span
                  >&nbsp;&nbsp;&nbsp;&nbsp;
                  <v-icon color="secondary">mdi-fire</v-icon>
                  <span style="color: #d4525d">{{ reply.like }}</span>
                </div>
              </v-card-text>
            </v-card> -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import api from '@/api/modules/post'

export default {
  data: () => ({
    app: '',
    post: {},
    comments: [],
    createComment: {
      'post': 0,
      'parent_comment': null,
      'comment': '',
      'secret': false
    },
    hotposts: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  }),

  created () {
    this.app = this.$route.path.split('/')[1]
    api.getPostDetail(this, this.app, this.$route.params.postId)
  },

  methods: {
    connected () {
      api.setPitapatConnected(this, this.app, this.$route.params.postId)
    },

    writeComment () {
      this.createComment.post = this.post.id
      api.writeComment(this.createComment, this, this.app)
    }
  }
}
</script>

<style scoped>
.comment_submit_btn,
.v-text-field--outlined >>> fieldset {
  border-color: #e5e5e5;
  border-width: 2px;
}
</style>
