<template>
  <v-app-bar color="primary">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Math Tabla</v-app-bar-title>

    <template v-slot:append>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <div v-if="state.isAuthenticated">
    <div>Welcome, {{ state.user?.name }}!</div>
    <v-btn icon @click="handleLogout">
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </div>
  <div v-else>
    <v-btn icon @click="handleLogin">
      <v-icon>mdi-login</v-icon>
    </v-btn>
  </div>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    temporary
  >
    <v-list>
      <v-list-item
        title="Home"
        value="home"
        to="/"
      >
        <template v-slot:prepend>
          <v-icon>mdi-home</v-icon>
        </template>
      </v-list-item>

      <v-list-item
        title="About"
        value="about"
        to="/about"
      >
        <template v-slot:prepend>
          <v-icon>mdi-information</v-icon>
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)
import { onMounted } from 'vue'
import { msalService } from '../config/useAuth'
import { msalInstance, state } from '../config/msalConfig'
const { login, logout, handleRedirect, registerAuthorizationHeaderInterceptor } = msalService()

const handleLogin = async () => {
  await login()
}

const handleLogout = () => {
  logout()
}

const initialize = async () => {
  try {
    await msalInstance.initialize()
    registerAuthorizationHeaderInterceptor() // Call the initialize function
  } catch (error) {
    console.log('Initialization error', error)
  }
}
onMounted(async () => {
  await initialize()
  await handleRedirect()
})
</script>

<style scoped>
.v-app-bar {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
