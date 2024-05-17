// https://vike.dev/onRenderClient
export { onRenderClient }

import { createApp } from './app'

async function onRenderClient(pageContext) {
  const app = createApp(pageContext)
  app.mount('#app')
}
