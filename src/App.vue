<template>
  <v-app id="app">
    <link rel="stylesheet" type="text/css" href="/static/style.css" />
    <AppBar />

    <v-main  style="background:#F3F5F8" class="pt-10">
      <v-container class="pb-10" style="background:#FFF; max-width:986px;">
        <v-row>
          <v-col class="col-12">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import accountsApi from '@/api/modules/accounts'
import postApi from '@/api/modules/post'
import AppBar from '@/components/Common/AppBar.vue'

export default {
  name: 'App',
  components: { AppBar },

  async created () {
    if (localStorage.getItem('refresh_token')) await accountsApi.refreshToken()
    accountsApi.getMyDetail()
    await postApi.getTopicCategories()
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 25px;
}

a {
  text-decoration: none;
  font-weight: bold;
}
a:hover {
  color: #d4525d;
}
</style>
