import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const proxyTarget = env.VITE_API_PROXY_TARGET

  if (!proxyTarget) {
    throw new Error('Missing VITE_API_PROXY_TARGET in .env.local')
  }

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': proxyTarget,
      },
    },
  }
})
