<template>
  <v-app id="inspire">
    <AppBar />

    <v-container class="#E5E5E5">
      <v-row>
        <v-col class="col-12 col-md-10" offset-md="1">

          <router-view/>

        </v-col>
      </v-row>
    </v-container>

  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue'

export default {
  name: 'App',

  components: {
    AppBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
