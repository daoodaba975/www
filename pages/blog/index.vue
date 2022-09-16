<template>
  <div>
    <div v-for="(post, index) in posts" :key="index">
        <!-- The short of the post -->
        <p>{{ post.short }}</p> 
        <!-- The link to the post -->
        <nuxt-link :to="localePath(post.path)">LINK</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogOverview',
  async asyncData({ $content, app, error }) {
    const posts = await $content(app.i18n.locale, 'blog')
      .only(['short', 'path'])
      .sortBy('createdAt', 'asc')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      posts: posts.map((posts) => ({
        ...posts,
        path: posts.path.replace(`/${app.i18n.locale}`, ''),
      }))
    }
  },
}
</script>