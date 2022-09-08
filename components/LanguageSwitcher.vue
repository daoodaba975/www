<template>
  <div>
    <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">
      EN
    </nuxt-link>
    <nuxt-link v-if="$i18n.locale !== 'fr'" :to="switchLocalePath('fr')">
      FR
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
}
</script>