<template>
  <v-main class="pt-13">
    <!-- 토픽 탭 -->
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-tabs centered grow color="secondary">
            <v-tabs-slider></v-tabs-slider>
            <v-tab
              class="black--text"
              v-for="category in categories"
              :key="category.name"
              :to="`/topic/${category.route}`"
              exact
            >
              {{ category.name }}
            </v-tab>
            <v-tab class="black--text">최신순</v-tab>
          </v-tabs>
        </v-col>
      </v-row>
      <v-divider class="mx-5"></v-divider>
    </v-container>

    <!-- 토픽 테이블 -->
    <router-view/>
  </v-main>
</template>

<script>
export default {
  name: 'Topic',

  data: () => ({
    categories: [
      { name: '두근두근 후기', route: 'afterpitapat' },
      { name: '헬스 · 다이어트', route: 'health' },
      { name: '주식 · 투자', route: 'invest' },
      { name: '썸 · 연애', route: 'ssum' },
      { name: '맛집 · 여행', route: 'travel' }
    ]
  }),

  methods: {}
}
</script>
