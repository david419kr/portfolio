<template>
  <NuxtLayout>
    <div class="wrap">
      <header class="site-header">
        <div class="container header-container">
          <NuxtLink :to="$localePath('/')" class="logo">Kum GyoJoong | Portfolio</NuxtLink>
          <div class="language-switcher">
            <button 
              class="lang-btn" 
              :class="{ active: $i18n.locale === 'ko' }" 
              @click="switchLanguage('ko')"
            >
              KO
            </button>
            <span class="lang-divider">|</span>
            <button 
              class="lang-btn" 
              :class="{ active: $i18n.locale === 'ja' }" 
              @click="switchLanguage('ja')"
            >
              JP
            </button>
          </div>
        </div>
      </header>
      <NuxtPage/>
    </div>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: 'Kum GyoJoong | Portfolio',
})

function switchLanguage(lang) {
  const localePath = useLocalePath()
  const route = useRoute()
  navigateTo(localePath(route.fullPath, lang))
}
</script>

<style scoped src="~/assets/css/app.css"></style>
