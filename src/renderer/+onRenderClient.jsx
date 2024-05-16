// https://vike.dev/onRenderClient
export { onRenderClient }

import React from 'react'
import { createRoot } from 'react-dom/client'
import { PageLayout } from './PageLayout'

async function onRenderClient(pageContext) {
  const { Page } = pageContext
  createRoot(document.getElementById('root')).render(
    <PageLayout>
      <Page />
    </PageLayout>,
  )
}
