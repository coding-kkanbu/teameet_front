<template>
  <div class="pt-6">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card flat>
            <v-window v-model="windowOnboarding">
              <v-window-item v-for="n in windowItemCnt" :key="`card-${n}`">
                <v-card rounded outlined color="grey" height="200">
                  <v-row class="fill-height" align="center" justify="center">
                    <h1 style="font-size: 5rem" class="white--text">
                      Slide {{ n }}
                    </h1>
                  </v-row>
                </v-card>
              </v-window-item>
            </v-window>

            <v-card-actions class="justify-center">
              <v-item-group
                v-model="windowOnboarding"
                class="text-center"
                mandatory
              >
                <v-item
                  v-for="n in windowItemCnt"
                  :key="`btn-${n}`"
                  v-slot="{ active, toggle }"
                >
                  <v-btn icon :input-value="active" @click="toggle">
                    <v-icon>mdi-record</v-icon>
                  </v-btn>
                </v-item>
              </v-item-group>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col
          v-for="recentPosts in recentPostsByCategory"
          :key="recentPosts.category.name"
          :class="[
            recentPosts.category.name === '두근두근 후기'
              ? 'col-12'
              : 'col-12 col-lg-6',
          ]"
        >
          <v-card height="211" dense outlined rounded>
            <v-card-title class="pa-3">
              <v-icon>{{ categoryIcons[recentPosts.category.name] }}</v-icon>
              &nbsp;&nbsp;{{ recentPosts.category.name }}
            </v-card-title>
            <v-divider class="mx-5"></v-divider>
            <v-list>
              <v-list-item-group active-class="primary--text">
                <template v-for="(post, index) in recentPosts.posts">
                  <v-list-item
                    :key="index"
                    dense
                    :to="{
                      name: 'topicDetail',
                      params: {
                        subtopic: recentPosts.category.slug,
                        postId: post.id,
                      },
                    }"
                  >
                    <template>
                      <v-row no-gutters dense align="center">
                        <v-list-item-content class="ml-3">
                          <v-list-item-title>
                            {{ post.title }}
                          </v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-action>
                          <v-list-item-action-text>
                            <v-icon dense color="#A6A6A6">mdi-fire</v-icon>
                            {{ post.postlike_n }}
                            <v-icon dense color="#A6A6A6">
                              mdi-message-processing-outline
                            </v-icon>
                            {{ post.comment_n }}
                          </v-list-item-action-text>
                        </v-list-item-action>
                      </v-row>
                    </template>
                  </v-list-item>
                </template>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import api from '@/api/modules/post'

export default {
  data: () => ({
    categoryIcons: {
      '두근두근 후기': 'mdi-heart-pulse',
      '헬스 · 다이어트': 'mdi-fire',
      '주식 · 투자': 'mdi-cash-plus',
      '썸 · 연애': 'mdi-puzzle-heart',
      '맛집 · 여행': 'mdi-coffee-outline'
    },
    recentPostsByCategory: [],
    windowItemCnt: 3,
    windowOnboarding: 0
  }),

  computed: {
    ...mapState('postStore', ['categories'])
  },

  async created () {
    if (this.categories.length === 0) {
      await api.getTopicCategories()
    }

    this.categories.map((category) => {
      api.getRecentPosts(this, category)
    })
  }
}
</script>

<style scoped></style>
