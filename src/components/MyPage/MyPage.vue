<template>
  <div class="pt-6">
    <v-container>
            <h3 class="pl-1 pb-6">나의 페이지</h3>

      <v-row>
        <v-col cols="12">
          <v-tabs centered grow color="primary">
            <v-tabs-slider></v-tabs-slider>
            <v-tab
              v-for="category in categories"
              :key="category.name"
              :to="`/mypage/${category.route}`"
              exact
            >
              {{ category.name }}
            </v-tab>
          </v-tabs>
        </v-col>
      </v-row>
      <v-divider class="mx-5"></v-divider>
    </v-container>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'MyPage',

  data: () => ({
    categories: [
      { name: '프로필', route: 'profile' },
      { name: '내가 쓴 글', route: 'posts' },
      { name: '내 알림', route: 'notifications' }
    ]
  })
}
</script>
