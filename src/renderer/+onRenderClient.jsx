// https://vike.dev/onRenderClient
export { onRenderClient }

import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { PageLayout } from './PageLayout'

async function onRenderClient(pageContext) {
  const { Page } = pageContext
  hydrateRoot(
    document.getElementById('root'),
    <PageLayout>
      <Page />
    </PageLayout>,
  )
}
