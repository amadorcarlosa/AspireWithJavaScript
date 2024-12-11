<script setup lang="ts">
import AppBar from './components/AppBar.vue'
</script>

<template>
  <v-app>
    <AppBar />
    
    <v-main>
      <v-container class="fill-height">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
/* Override Vuetify variables with your color palette */
:root {
  --v-theme-primary: var(--color-primary);
  --v-theme-secondary: var(--color-secondary);
  --v-theme-accent: var(--color-tertiary);
  --v-theme-success: var(--color-success);
  --v-theme-warning: var(--color-warning);
  --v-theme-error: var(--color-danger);
}

/* Remove the default max-width constraint */
#app {
  max-width: none !important;
  padding: 0 !important;
  margin: 0 !important;
}

/* Keep your existing media queries for larger screens */
@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }
}

/* Utility classes */
.hero-container {
  width: 100%;
  max-width: 600px;
  margin: auto;
}

.hero-image {
  width: 100%;
  height: auto;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.footer-links {
  text-align: center;
  margin-bottom: 1rem;
}
</style>