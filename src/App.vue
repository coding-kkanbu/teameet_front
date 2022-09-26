<template>
  <v-app id="inspire">
    <link rel="stylesheet" type="text/css" href="/static/style.css" />
    <AppBar />

    <v-main class="pt-10">
      <v-container class="#E5E5E5">
        <v-row>
          <v-col class="col-12 col-md-10" offset-md="1">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import api from '@/api/modules/accounts'
import postApi from '@/api/modules/post'
import AppBar from '@/components/Common/AppBar.vue'

export default {
  name: 'App',
  components: { AppBar },

  async created () {
    api.getMyDetail()
    await postApi.getTopicCategories()
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  text-decoration: none;
  font-weight: bold;
}
a:hover {
  color: #d4525d;
}
</style>
