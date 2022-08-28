<template>
  <div class="pt-2">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-tabs centered grow color="secondary">
            <v-tabs-slider></v-tabs-slider>
            <v-tab class="black--text" to="/pitapat/hot">인기글</v-tab>
            <v-tab
              class="black--text"
              v-for="category in categories"
              :key="category.name"
              :to="{ name: 'pitapatSubtopic', params: { subtopic: category.slug } }"
              exact
              @click="changeTab(category)"
            >
              {{ category.name }}
            </v-tab>
            <v-tab class="black--text">최신순</v-tab>
          </v-tabs>
        </v-col>
      </v-row>
      <v-divider class="mx-5"></v-divider>
    </v-container>

    <now-hot v-show="$route.params.subtopic === 'hot'"></now-hot>

    <router-view />
  </div>
</template>

<script>
import api from '@/api/modules/post'
import NowHot from './NowHot.vue'

export default {
  components: { NowHot },
  name: 'Topic',

  data: () => ({
    categories: [
      { name: '셀프소개팅', slug: 'selfsogaeting' },
      { name: '소개팅', slug: 'sogaeting' },
      { name: '미팅', slug: 'meeting' }
    ]
  }),

  methods: {
    changeTab (category) {
      if (category.slug !== 'hot') {
        api.getAllPostsByCategory(category.slug, 1)
      }
    }
  }
}
</script>
