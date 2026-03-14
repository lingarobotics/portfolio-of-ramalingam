const PUBLIC_CONFIG_ENDPOINT = import.meta.env.VITE_PUBLIC_CONFIG_ENDPOINT || '/api/public-config'

let cachedConfigPromise

export function fetchPublicConfig() {
  if (!cachedConfigPromise) {
    cachedConfigPromise = fetch(PUBLIC_CONFIG_ENDPOINT, { method: 'GET' })
      .then(async (response) => {
        if (!response.ok) {
          return {}
        }

        return response.json()
      })
      .catch(() => ({}))
  }

  return cachedConfigPromise
}
