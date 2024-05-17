import { createSSRApp, h, markRaw, ref } from 'vue'
import PageLayout from './PageLayout.vue'

export { createApp }

function createApp(pageContext) {
  const { Page } = pageContext

  const pageRef = ref(markRaw(Page))

  const PageWithLayout = {
    render() {
      return h(PageLayout, {}, { default: () => h(pageRef.value) })
    },
  }

  const app = createSSRApp(PageWithLayout)

  Object.assign(app, {
    changePage: (pageContext) => {
      pageRef.value = markRaw(pageContext.Page)
    },
  })

  return app
}
