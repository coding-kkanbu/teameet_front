<template>
  <div>
    <v-app-bar
      app
      color="#FFFFFF"
      flat
      style="border-bottom: 1px solid #d2d2d2 !important;"
    >
      <div class="align-center d-flex justify-space-between" style="margin:auto; width: 986px;">
        <!-- 00 드로워 메뉴 -->
        <v-app-bar-nav-icon class="d-flex d-md-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <!-- 01 로고 -->
        <a href="/">
          <img class="ml-4" src="@/assets/tm_img/tm_logo.png" width="100"
        /></a>
        <!-- 02 일반 메뉴 -->
      <div class="d-md-flex d-none mx-auto">
          <v-tabs centered class="pl-n12 black--text" color="primary">
            <v-tabs-slider></v-tabs-slider>
            <v-tab
              class="black--text"
              v-for="menu in menus"
              :key="menu.name"
              :to="menu.url"
              >{{ menu.name }}</v-tab
            >
          </v-tabs>
        </div>
        <div class="d-flex align-center">
          <!-- 03 검색바 -->
          <v-responsive max-width="220">
            <v-text-field
              class="d-md-flex d-none search_box"
              hide-details
              dense
              filled
              rounded
              color="#F5F6F8"
              style="font-size: 0.9rem;"
              placeholder="검색어를 입력하세요"
            >
              <v-icon slot="append" color="primary">mdi-magnify</v-icon>
            </v-text-field>
          </v-responsive>

          <!-- 03 알림 -->
          <v-badge
            :content="notifications"
            :value="notifications"
            color="secondary"
            overlap
          >
            <v-icon dense color="black" class="pl-5">mdi-bell</v-icon>
          </v-badge>

          <v-menu offset-y left bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn text class="pl-3" v-bind="attrs" v-on="on">
                <v-icon dense color="black"> mdi-account</v-icon>
                <span style="color: black; font-weight: bold">
                  {{ user.username }}
                </span>
              </v-btn>
            </template>

            <v-list style="text-align: center">
              <template v-if="!isLogin">
                <v-list-item @click="dialogOpen('register')">
                  <v-list-item-title>회원가입</v-list-item-title>
                </v-list-item>
                <v-list-item @click="dialogOpen('login')">
                  <v-list-item-title>로그인</v-list-item-title>
                </v-list-item>
              </template>

              <template v-else>
                <v-list-item>
                  <v-list-item-title @click="logout">로그아웃</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <router-link to="/mypage/profile">My Page</router-link>
                </v-list-item>
              </template>
            </v-list>
          </v-menu>
        </div>
      </div>
    </v-app-bar>
    <Register/> <LogIn />
    <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-gray--text text--accent-4"
        >

          <v-list-item
            v-for="menu in menus"
            :key="menu.name"
            :to="menu.url"
            >
            <v-list-item-title>{{ menu.name }}</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Register from '@/components/Common/Register.vue'
import LogIn from '@/components/Common/LogIn.vue'
import { mapState, mapMutations } from 'vuex'
import api from '@/api/modules/accounts'

export default {
  components: { Register, LogIn },

  data: () => ({
    menus: [
      { name: 'Home', url: {name: 'home'} },
      { name: '토픽', url: { name: 'topicSubtopic', params: {subtopic: 'afterpitapat'} } },
      { name: '두근두근', url: { name: 'pitapatSubtopic', params: {subtopic: 'hot'} } }
    ],
    notifications: 1,
    drawer: false,
    group: null
  }),

  computed: {
    ...mapState('userStore', ['isLogin', 'user'])
  },

  methods: {
    ...mapMutations('userStore', ['dialogOpen']),
    logout () {
      api.logout()
    }
  },

  watch: {
    group () {
      this.drawer = false
    }
  }
}
</script>

<style scoped>
.v-dialog .v-text-field--outlined >>> fieldset {
  border-color: #b4b4b4;
  border-width: 1px;
}

.v-tab,
.v-dialog .v-btn {
  font-weight: bold;
  font-size: 1em;
}

.search_box input::placeholder {
  color: red !important;
  opacity: 1;
}
</style>
