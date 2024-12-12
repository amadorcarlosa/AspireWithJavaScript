<script setup lang="ts">
import { onMounted } from 'vue'
import { msalService } from '@/config/useAuth'
import { useRouter } from 'vue-router'

const router = useRouter()
const { handleRedirect } = msalService()

onMounted(async () => {
  console.log('Auth component mounted')
  var response=   await handleRedirect()
  console.log(response )
  // Redirect to home after successful login
 
})
</script>

<template>
  <div>Processing authentication...</div>
</template>