<template>
    <v-container class="mt-16">
      <v-card elevation="0" class="pa-6 my-4">
        <v-row>
          <v-col cols="12" md="5" class="d-flex flex-column justify-center">
            <h2 class="text-h3 text-secondary mb-4">Transforming Math Education</h2>
            <p class="text-body-1 text-tertiary">"Thoughts without content are empty, intuitions without concepts are blind."</p>
            <v-row>
              <v-btn color="primary" size="large" @click="handleDemoStart">Get Started</v-btn>
              <v-btn color="secondary" variant="outlined" size="large">Learn More</v-btn>
            </v-row>
          </v-col>
          
          <v-col cols="12" md="7">
            <div class="hero-container">
                <Hero 
  class="hero-image" 
  :style="{ width: '100%', height: 'auto' }" 
/>
            </div>
          </v-col>
        </v-row>
      </v-card>
  
      <v-divider class="my-8" />
      
      <p class="text-body-2 mb-2 text-center">
        &copy; 2024 Math Tabla. All rights reserved.
      </p>
     
      <div class="social-icons">
        <v-btn icon="mdi-facebook" color="primary" href="https://facebook.com" />
        <v-btn icon="mdi-twitter" color="primary" href="https://twitter.com" />
        <v-btn icon="mdi-instagram" color="primary" href="https://instagram.com" />
      </div>
    </v-container>
  </template>
  
  <script setup lang="ts">
  import Hero from '../components/SVG/Hero.vue'
  
  const handleDemoStart = () => {
    // Implement demo start logic
  }
  </script>