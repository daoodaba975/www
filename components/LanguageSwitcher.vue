<template>
  <div>
    <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">
      <abbr title="English">
        <img src="~/assets/img/lang/en.png" height="30" width="30" alt=""/>
      </abbr>
    </nuxt-link>
    <nuxt-link v-if="$i18n.locale !== 'fr'" :to="switchLocalePath('fr')">
      <abbr title="Français">
        <img src="~/assets/img/lang/fr.png" height="30" width="30" alt=""/>
      </abbr>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
}
</script>