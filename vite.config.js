import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const proxyTarget = env.VITE_API_PROXY_TARGET

  const server = proxyTarget
    ? {
        proxy: {
          '/api': proxyTarget,
        },
      }
    : undefined

  return {
    plugins: [react()],
    server,
  }
})
