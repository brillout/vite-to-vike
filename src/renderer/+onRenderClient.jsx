// https://vike.dev/onRenderClient
export { onRenderClient }

import React from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { PageLayout } from './PageLayout'

let root
async function onRenderClient(pageContext) {
  const { Page } = pageContext
  const container = document.getElementById('root')
  const page = (
    <PageLayout>
      <Page />
    </PageLayout>
  )
  if (pageContext.isHydration) {
    root = hydrateRoot(container, page)
  } else {
    if (!root) {
      root = createRoot(container)
    }
    root.render(page)
  }
}
