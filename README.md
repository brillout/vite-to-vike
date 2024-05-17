# Add SSR/SSG to Vite

*Example of adding SSR/SSG to an existing Vite + Vue app, using [Vike](https://vike.dev).*

See [`react` branch](https://github.com/brillout/vite-to-vike) for the same but with Vite + React.

The migration is progressive: each of the following steps results in a working app.
> [!NOTE]  
> This enables you to get started quickly while, over time and at your own pace, progressively migrating to the full Vike experience.

Alternatively, instead of migrating in a progressive fashion, you can skip `Step 3+4` and directly migrate to [`vike-vue`](https://vike.dev/vike-vue).


## Migration Steps

### Step 1

[`Migrate to Vike`](https://github.com/brillout/vite-to-vike/commit/105371d3951c59d6c644f57d0608fbbcafbd3bb0)

> [!NOTE]  
> If you have multiple pages, consider temporarily using a [catch-all route](https://vike.dev/route-string#catch-all) and creating proper pages later.

### Step 2

Either:
- [`Add pre-rendering`](https://github.com/brillout/vite-to-vike/commit/3947704b155c96d55aafc48231b41227e3f5e94e), or
- [`Add Express.js server`](https://github.com/brillout/vite-to-vike/commit/9444206c4a242e4b80941e12c8737854a0dfd66f).

> [!NOTE]  
> - [Vike Docs > Pre-rendering](https://vike.dev/pre-rendering)
> - [Vike Docs > Pre-rendering > Should I pre-render?](https://vike.dev/pre-rendering#should-i-pre-render)

### Step 3

[`Add SSR`](https://github.com/brillout/vite-to-vike/commit/439d6f8fb4407e85bbee9f4895fd4b3403e10937)

### Step 4 (Optional)

[`Add Client Routing`](https://github.com/brillout/vite-to-vike/commit/7b1d8986591ec6e36b55d8ece1a80fa4232b48dd)

### Step 5 (Optional)

[`Use vike-vue`](https://github.com/brillout/vite-to-vike/commit/0ec2c114dd3ea36f26b305a7f1c2d45f472d78c9)

> [!NOTE]  
> Instead of using [`vike-vue`](https://vike.dev/vike-vue), you can piggyback the features of the following:
> - [/boilerplates/boilerplate-vue-ts](https://github.com/vikejs/vike/tree/main/boilerplates/boilerplate-vue-ts)
> - [/examples/vue-full](https://github.com/vikejs/vike/tree/main/examples/vue-full)
> - [`vike-vue` > Under the hood](https://vike.dev/vike-vue#under-the-hood)


## See also

- [Vike > Add SSR/SSG to existing Vite app](https://vike.dev/add)
