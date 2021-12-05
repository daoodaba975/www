<template>
  <div>

    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16">
      <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div class="leading-tight">Daouda BA 👨🏽‍💻</div>
        <div class="text-green-700 leading-tight">Fullstack Software Engineer</div>
      </div>
      <div class="mt-8 sm:mt-0">
        <img src="~assets/img/developer.svg" alt="hero" width="285" height="154" class="mx-auto sm:mx-0" />
      </div>
    </div>

    <div class="container-inner mx-auto">
      <p class="text-lg sm:text-xl">
        I am a Fullstack Software Engineer based at DAKAR, Senegal working in the field of web and mobile development. <br>
        Currently working in full-time remote, with more than 5 years of experience. I am also the founder of <a href="https://galsendev.com/" target="_blank" rel="noopener">Galsen Dev</a>, the biggest developers community in Senegal 💡
      </p>
      <div class="flex justify-between items-center py-6">
      </div>
    </div>

    <div class="overflow-x-hidden">
      <div class="get-to-know-me container-inner mx-auto text-xl relative">
        <h2 class="font-bold mb-6 underline">😎 Get to know me</h2>
        <div class="absolute left-0" style="top: 50px; transform: translateX(-100%)">
          <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
        </div>
        <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
          <div><img src="~assets/img/daooda.webp" width="32px" height="32px" alt="avatar" class="w-32 h-32 rounded-full mb-8 lg:mb-0" /></div>
          <div class="flex-1 text-lg sm:text-xl ml-6">I enjoy simplifying complex problems into beautiful, intuitive designs 🌟 My job is to design a solution that is both functional and user-friendly while also being visually appealing. <br> In addition, I give your product a personal touch and ensure that it is captivating and simple to use. My goal is to convey your message and identity in the most imaginative way possible 🎯</div>
        </div>
      </div>
    </div>

    <div class="container-inner mx-auto mb-12">
      <h1 class="font-bold text-3xl mb-6 underline">Last post:</h1>
      <div v-for="(post,index) in posts" :key="index" class="post border-gray-400 border-b mb-12">
        <h2 class="text-2xl font-bold"><nuxt-link :to="`/posts/${post.slug}`" class="text-copy-primary">{{ post.title }}</nuxt-link></h2>
        <div class="text-copy-secondary mb-4">
          <span>{{ formatDate(post.date) }}</span>
        </div>

        <div class="text-lg mb-4">
          {{ post.summary }}
        </div>

        <div class="mb-8">
          <nuxt-link :to="`/posts/${post.slug}`" class="font-bold uppercase">Read More</nuxt-link>
        </div>
      </div>

      <div class="flex justify-between text-xl items-center">
        <div>
          <nuxt-link to="/blog" class="font-bold uppercase">Go to Blog ▶️</nuxt-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { format } from 'date-fns'

export default {
  data() {
    return {
      posts: [],
      currentPage: 1,
      pagination: 1,
      base: '/blog',
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.allPosts.length / this.pagination)
    },
    showPreviousPage() {
      return this.currentPage !== 1
    },
    previousPage() {
      return [0, 1].includes(this.currentPage - 1)
        ? this.base
        : `${this.base}?page=${this.currentPage - 1}`;
    },
    showNextPage() {
      return this.currentPage !== this.totalPages
    },
    nextPage(currentPage, totalPages) {
      return this.totalPages > this.currentPage
        ? `${this.base}?page=${this.currentPage + 1}`
        : `${this.base}?page=${this.currentPage}`;
    }
  },
  methods: {
    formatDate (dateToFormat) {
      return format(new Date(dateToFormat), 'MMMM d, Y')
    }
  },
  async fetch() {
    this.allPosts = await this.$content()
      .fetch()

    this.currentPage = parseInt(this.$route.query.page) ? parseInt(this.$route.query.page) : 1

    if (this.currentPage > this.totalPages) {
      this.$router.push('/blog')
      window.location.href = '/blog'
    }

    this.posts = await this.$content()
      .sortBy('date', 'desc')
      .limit(this.pagination)
      .skip((this.currentPage - 1) * this.pagination)
      .fetch()
  },
  fetchOnServer: false
}
</script>

<style>
</style>
