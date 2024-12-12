<template>
    <v-container class="fill-height">
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="6" lg="4">
                <v-card class="elevation-12 text-center">
                    <v-card-title class="text-h5 pt-4">
                        Signing Out
                    </v-card-title>

                    <v-card-text>
                        <v-progress-circular v-if="loading"
                                             indeterminate
                                             color="primary"
                                             size="64"
                                             class="mb-4"></v-progress-circular>

                        <div v-else>
                            <v-icon color="success"
                                    size="64"
                                    class="mb-4">
                                mdi-check-circle
                            </v-icon>
                        </div>

                        <p class="text-body-1 mb-4">
                            {{ loading ? 'Signing you out securely...' : 'You have been signed out successfully' }}
                        </p>

                        <v-btn v-if="!loading"
                               color="primary"
                               block
                               @click="handleSignInAgain">
                            <v-icon start>mdi-login</v-icon>
                            Sign In Again
                        </v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

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
    const loading = ref(true)
    const showError = ref(false)
    const errorMessage = ref('')
    const { logout, login } = msalService()

    const handleSignInAgain = async () => {
      try {
        await login()
      } catch (error) {
        console.error('Login error:', error)
        errorMessage.value = 'Unable to sign in. Please try again.'
        showError.value = true
      }
    }

    onMounted(async () => {
      try {
        if (state.isAuthenticated) {
          await logout()
        }
        loading.value = false
      } catch (error) {
        console.error('Logout error:', error)
        errorMessage.value = 'An error occurred during sign out'
        showError.value = true
        loading.value = false
      }
    })
</script>

<style scoped>
    .fill-height {
        min-height: calc(100vh - 64px);
    }

    .v-card {
        max-width: 100%;
    }

    .v-icon {
        transition: transform 0.3s ease;
    }

        .v-icon:hover {
            transform: scale(1.1);
        }

    .v-btn {
        transition: transform 0.2s ease;
    }

        .v-btn:hover {
            transform: translateY(-2px);
        }
</style>