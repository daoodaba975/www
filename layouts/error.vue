<template>
  <div class="container-inner mx-auto py-16">
    <div v-if="error.statusCode === 404">
      <h2 class="text-4xl font-bold mb-16">{{ $t('error1') }}</h2>
      <img src="~/assets/img/unDraw/404.svg" height="" width="" alt="404 page not foud"/>
    </div>
    <div v-else>
      <h2>{{ $t('error2') }}</h2>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
  }
</script>