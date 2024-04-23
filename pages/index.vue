<template>
  <div>
    <div
      class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16"
    >
      <div class="text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div class="leading-tight">Daouda BA 👨🏽‍💻</div>
        <div class="text-green-700 leading-tight">{{ $t("developer") }}</div>
      </div>
      <div class="mt-8 sm:mt-0">
        <img
          src="~assets/img/unDraw/programming.svg"
          alt="hero"
          width="285"
          height="154"
          class="mx-auto sm:mx-0"
        />
      </div>
    </div>

    <div class="container-inner mx-auto">
      <p class="text-lg sm:text-xl">
        {{ $t("me") }} <br />
        {{ $t("exp") }}
        <a href="https://galsen.dev" target="_blank" rel="noopener"
          >Galsen DEV</a
        >, {{ $t("exp-end") }}
      </p>
      <div class="flex justify-between items-center py-6"></div>
    </div>

    <div class="overflow-x-hidden">
      <div class="container-inner mx-auto relative">
        <h2 class="font-bold text-3xl mb-6 underline">😎 {{ $t("know") }} :</h2>
        <div
          class="absolute left-0"
          style="top: 50px; transform: translateX(-100%)"
        >
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle" />
          </svg>
        </div>
        <div
          class="flex flex-col sm:flex-row justify-between items-center mb-16"
        >
          <div>
            <img
              src="~assets/img/me/daooda.ba.webp"
              width="32px"
              height="32px"
              alt="DaoudaBA"
              class="w-32 h-32 rounded-full mb-8 lg:mb-0"
            />
          </div>
          <div class="flex-1 text-lg sm:text-xl ml-4">{{ $t("known") }}</div>
        </div>
      </div>
    </div>

    <Skills />
  </div>
</template>

<script>
import { format } from "date-fns";

export default {
  data() {
    return {
      posts: [],
      currentPage: 1,
      pagination: 1,
      base: "/blog",
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.allPosts.length / this.pagination);
    },
  },
  methods: {
    formatDate(dateToFormat) {
      return format(new Date(dateToFormat), "MMMM d, Y");
    },
  },
  async fetch() {
    this.allPosts = await this.$content().fetch();

    this.currentPage = parseInt(this.$route.query.page)
      ? parseInt(this.$route.query.page)
      : 1;

    if (this.currentPage > this.totalPages) {
      this.$router.push("/blog");
      window.location.href = "/blog";
    }

    this.posts = await this.$content()
      .sortBy("date", "desc")
      .limit(this.pagination)
      .skip((this.currentPage - 1) * this.pagination)
      .fetch();
  },
  fetchOnServer: false,
};
</script>

<style></style>
