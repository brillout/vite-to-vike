// https://vike.dev/onRenderClient
export { onRenderClient }

import { createApp } from './app'

let app
async function onRenderClient(pageContext) {
  if (!app) {
    app = createApp(pageContext)
    app.mount('#app')
  } else {
    app.changePage(pageContext)
  }
}
