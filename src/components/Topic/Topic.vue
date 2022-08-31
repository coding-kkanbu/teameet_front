<template>
  <div class="pt-2">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-tabs centered grow color="secondary">
            <v-tabs-slider></v-tabs-slider>
            <v-tab
              class="black--text"
              :to="{
                name: 'topicSubtopic',
                params: { subtopic: 'afterpitapat' },
              }"
              @click="changeTab('afterpitapat')"
              >두근두근 후기</v-tab
            >
            <v-tab
              class="black--text"
              v-for="category in categories"
              :key="category.name"
              :to="{
                name: 'topicSubtopic',
                params: { subtopic: category.slug },
              }"
              exact
              v-if="category.name != '두근두근 후기'"
              @click="changeTab(category.slug)"
            >
              {{ category.name }}
            </v-tab>
            <v-tab class="black--text">최신순</v-tab>
          </v-tabs>
        </v-col>
      </v-row>
      <v-divider class="mx-5"></v-divider>
    </v-container>

    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import api from '@/api/modules/post'

export default {
  name: 'Topic',

  data: () => ({}),

  computed: {
    ...mapState('postStore', ['categories'])
  },

  methods: {
    changeTab (slug) {
      api.getAllPostsByCategory(slug, 1)
    }
  }
}
</script>
