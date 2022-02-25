<template>
  <v-app>
      <v-app-bar
        color="primary"
      >
        <v-toolbar-title>Rifas</v-toolbar-title>
        <v-btn variant="text">Home</v-btn>
        <v-btn variant="text" icon="mdi-filter"></v-btn>
        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
        <v-spacer></v-spacer>
        <v-btn variant="text">Usuario</v-btn>
      </v-app-bar>
    <v-main>
              <router-view></router-view>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
}
</script>
