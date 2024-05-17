# Add SSR/SSG to Vite

*Example of adding SSR/SSG to an existing Vite + React app, using [Vike](https://vike.dev).*

See [`vue` branch](https://github.com/brillout/vite-to-vike/tree/vue) for the same but with Vite + Vue.

The migration is progressive: each of the following steps results in a working app.
> [!NOTE]  
> This enables you to get started quickly while, over time and at your own pace, progressively migrating to the full Vike experience.

Alternatively, instead of migrating in a progressive fashion, you can skip `Step 3+4` and directly migrate to [`vike-react`](https://vike.dev/vike-react).


## Migration Steps

### Step 1

[`Migrate to Vike`](https://github.com/brillout/vite-to-vike/commit/358bc1019f16d358563999f1f428f9b5a2bac551)

> [!NOTE]  
> If you have multiple pages, consider temporarily using a [catch-all route](https://vike.dev/route-string#catch-all) and creating proper pages later.

### Step 2

Either:
- [`Add pre-rendering`](https://github.com/brillout/vite-to-vike/commit/e29fff76b22eb22a15c0b105284927a5d0640f47), or
- [`Add Express.js server`](https://github.com/brillout/vite-to-vike/commit/97842c99b4b2b0816d85589f2297aec52560bae8).

> [!NOTE]  
> - [Vike Docs > Pre-rendering](https://vike.dev/pre-rendering)
> - [Vike Docs > Pre-rendering > Should I pre-render?](https://vike.dev/pre-rendering#should-i-pre-render)

### Step 3

[`Add SSR`](https://github.com/brillout/vite-to-vike/commit/69d584164c58d3c5707692ed46b8973c205a474c)

### Step 4 (Optional)

[`Add Client Routing`](https://github.com/brillout/vite-to-vike/commit/9cdcdd26d109de55866853d9e6313d71f3e63efc)

### Step 5 (Optional)

[`Use vike-react`](https://github.com/brillout/vite-to-vike/commit/bcbb9b69dc3d3008a19d4578c5ea7a7e4b7b1cca)

> [!NOTE]  
> Instead of using [`vike-react`](https://vike.dev/vike-react), you can piggyback the features of the following:
> - [/boilerplates/boilerplate-react-ts](https://github.com/vikejs/vike/tree/main/boilerplates/boilerplate-react-ts)
> - [/examples/react-full](https://github.com/vikejs/vike/tree/main/examples/react-full)
> - [`vike-react` > Under the hood](https://vike.dev/vike-react#under-the-hood)


## See also

- [Vike > Add SSR/SSG to existing Vite app](https://vike.dev/add)
