<template>
<v-app id="inspire">

    <v-container>
      <v-row>
        <v-col class="col-12 col-md-10" offset-md="1">

          <router-view/>

        </v-col>
      </v-row>
    </v-container>

  </v-app>
</template>

<script>
export default {
  name: 'App'
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
</style>
