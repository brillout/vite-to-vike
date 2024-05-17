import { createSSRApp, h } from 'vue'
import PageLayout from './PageLayout.vue'

export { createApp }

function createApp(pageContext) {
  const { Page } = pageContext
  const PageWithLayout = {
    render() {
      return h(PageLayout, {}, { default: () => h(Page) })
    },
  }
  const app = createSSRApp(PageWithLayout)
  return app
}
