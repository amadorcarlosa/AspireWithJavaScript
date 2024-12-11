// src/config/msalConfig.ts
import { PublicClientApplication, type AccountInfo, type RedirectRequest } from '@azure/msal-browser'
import { reactive } from 'vue'

export const msalConfig = {
  auth: {
    clientId: '5305cd1c-37c2-4b17-83fb-2f70a7c09e5e', // Your appId from manifest
    authority: 'https://login.microsoftonline.com/053fe859-9f22-4d3e-9462-e43785f01067', // Based on your publisherDomain
    redirectUri: 'http://localhost:58580/auth', // From your spa.redirectUris
    postLogoutUri: 'http://localhost:58580' // Usually your base application URL
  },
  cache: {
    cacheLocation: 'sessionStorage' as 'sessionStorage',
    storeAuthStateInCookie: false
  }
}

export const graphScopes: RedirectRequest = {
  scopes: ['user.read', 'openid', 'profile']
}

export const state = reactive({
  isAuthenticated: false,
  user: null as AccountInfo | null
})

export const msalInstance = new PublicClientApplication(msalConfig)