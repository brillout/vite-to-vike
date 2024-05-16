// https://vike.dev/onRenderHtml
export { onRenderHtml }

import React from 'react'
import { renderToString } from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import { PageLayout } from './PageLayout'

async function onRenderHtml(pageContext) {
  const { Page } = pageContext
  const pageHtml = dangerouslySkipEscape(
    renderToString(
      <PageLayout>
        <Page />
      </PageLayout>,
    ),
  )

  return escapeInject`
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root">${pageHtml}</div>
  </body>
</html>
`
}
