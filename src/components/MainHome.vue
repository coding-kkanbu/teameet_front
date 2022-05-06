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
              <v-item-group v-model="windowOnboarding" class="text-center" mandatory>
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
        <v-col cols="12">
          <v-card height="211" dense outlined rounded>
            <v-card-title class="pa-3">
              <v-icon color="secondary">mdi-heart-pulse</v-icon>
              &nbsp;&nbsp;두근두근 후기
            </v-card-title>
            <v-divider class="mx-5"></v-divider>
            <v-list>
              <v-list-item-group active-class="primary--text">
                <template v-for="(post, index) in posts">
                  <v-list-item :key="index" dense>
                    <template>
                      <v-row no-gutters dense align="center">
                        <v-col cols="6" class="pa-0">
                          <v-list-item-content class="ml-3">
                            <v-list-item-title>
                              {{ post.title }}
                            </v-list-item-title>
                          </v-list-item-content>
                        </v-col>
                        <v-col cols="3" class="pa-0 text-right">
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
                        </v-col>
                        <v-col cols="3" class="pa-0 text-right">
                          <v-list-item-action>
                            <v-list-item-action-text>
                              {{ post.owner.substr(0, 12) }}
                              &nbsp;· &nbsp;{{ post.updated_at }}
                            </v-list-item-action-text>
                          </v-list-item-action>
                        </v-col>
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

    <v-container>
      <v-row>
        <v-col v-for="recentPosts in recentPostsByCategory" :key="recentPosts.category" class="col-12 col-lg-6">
          <v-card height="211" dense outlined rounded>
            <v-card-title class="pa-3">
              <v-icon>{{ categoryIcons[recentPosts.category] }}</v-icon>
              &nbsp;&nbsp;{{ recentPosts.category }}
            </v-card-title>
            <v-divider class="mx-5"></v-divider>
            <v-list>
              <v-list-item-group active-class="primary--text">
                <template v-for="(post, index) in recentPosts.posts">
                  <v-list-item :key="index" dense>
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
import api from '@/api/modules/post'
export default {
  data: () => ({
    categoryIcons: {
      '헬스 · 다이어트': 'mdi-fire',
      '주식 · 투자': 'mdi-cash-plus',
      '썸 · 연애': 'mdi-puzzle-heart',
      '맛집 · 여행': 'mdi-coffee-outline'
    },
    categoryIds: [],
    recentPostsByCategory: [],
    windowItemCnt: 3,
    windowOnboarding: 0
  }),

  created () {
    api.getCategoryIds(this)
    for (var categoryId in this.categoryIds) {
      api.getRecentPostsByCategory(this, categoryId)
    }
  }
}
</script>

<style scoped></style>
