<script setup lang="ts">
import { onMounted } from 'vue'
import { msalService } from '@/config/useAuth'
import { useRouter } from 'vue-router'

const router = useRouter()
const { handleRedirect } = msalService()

onMounted(async () => {
  console.log('Auth component mounted')
  await handleRedirect()
  // Redirect to home after successful login
  router.push('/')
})
</script>

<template>
  <div>Processing authentication...</div>
</template>