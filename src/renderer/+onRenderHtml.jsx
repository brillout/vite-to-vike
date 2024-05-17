// https://vike.dev/onRenderHtml
export { onRenderHtml }

import { escapeInject } from 'vike/server'

async function onRenderHtml() {
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
    <div id="root"></div>
  </body>
</html>
`
}
