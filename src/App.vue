<template>
  <v-app>
    <v-app-bar app color="#7734F3" dark>
      <v-toolbar-title> Most used words </v-toolbar-title>
    </v-app-bar>

    <v-main> <Home /> </v-main>
  </v-app>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "App",

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
