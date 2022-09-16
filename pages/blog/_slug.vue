<template>
  <div>
    <h1>{{ post.title }}</h1>
    <nuxt-content :document="post" />
  </div>
</template>

<script>
export default {
  name: 'BlogSlug',
  async asyncData({ $content, params, app, error }) {
    const post = await $content(app.i18n.locale, 'blog', params.slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })
    return { post }
  },
}
</script>