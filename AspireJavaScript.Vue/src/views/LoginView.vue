<template>
    <v-container class="fill-height">
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="6" lg="4">
                <v-card class="elevation-12">
                    <v-card-title class="text-h5 text-center pb-2">
                        Welcome to Math Tabla
                    </v-card-title>

                    <v-card-text class="text-center">
                        <p class="mb-4 text-medium-emphasis">Access your personalized learning experience</p>

                        <v-btn color="primary"
                               size="large"
                               block
                               @click="handleMsalLogin"
                               :loading="isLoading"
                               :disabled="isLoading">
                            <v-icon start>mdi-microsoft</v-icon>
                            Sign in with Microsoft Account
                        </v-btn>
                    </v-card-text>

                    <v-divider class="my-3"></v-divider>

                    <v-card-text class="text-center text-caption text-medium-emphasis">
                        By signing in, you agree to our Terms of Service and Privacy Policy
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <!-- Error Snackbar -->
        <v-snackbar v-model="showError"
                    color="error"
                    timeout="5000"
                    location="top">
            {{ errorMessage }}
            <template v-slot:actions>
                <v-btn variant="text"
                       @click="showError = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </v-container>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import { useRouter } from 'vue-router'
    import { msalService } from '@/config/useAuth'
    import { state } from '@/config/msalConfig'

    const router = useRouter()
    const isLoading = ref(false)
    const showError = ref(false)
    const errorMessage = ref('')

    const { login, initialize, handleRedirect, registerAuthorizationHeaderInterceptor } = msalService()

    const handleMsalLogin = async () => {
      isLoading.value = true
      try {
        await login()
      } catch (error) {
        console.error('Login error:', error)
        errorMessage.value = 'Unable to sign in. Please try again.'
        showError.value = true
      } finally {
        isLoading.value = false
      }
    }

    onMounted(async () => {
      try {
        await initialize()
        await handleRedirect()
        registerAuthorizationHeaderInterceptor()

        // If user is already authenticated, redirect to home
        if (state.isAuthenticated && state.user) {
          router.push('/')
        }
      } catch (error) {
        console.error('Initialization error:', error)
        errorMessage.value = 'Authentication service initialization failed'
        showError.value = true
      }
    })
</script>

<style scoped>
    .fill-height {
        min-height: calc(100vh - 64px); /* Adjust based on your app bar height */
    }

    /* Add subtle hover effect to the sign-in button */
    .v-btn:hover {
        transform: translateY(-1px);
        transition: transform 0.2s ease;
    }

    .v-card {
        max-width: 100%;
        transition: box-shadow 0.2s ease;
    }

        .v-card:hover {
            box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.05);
        }
</style>