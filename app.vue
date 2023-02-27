<template>
  <div class="app__layout">
    <div v-if="notification.show" class="notification">
      <AppNotification v-bind="notification" />
    </div>
    <div class="container__items">
      <AppDrawer />
    </div>
  </div>
</template>
<script setup>
import { useStore } from './stores/index'
const runtimeConfig = useRuntimeConfig()
const clientToken = runtimeConfig.public.clientToken
const store = useStore()

onMounted(async () => {
  if (window.top === window.self) {
    // Redirect if outside Storyblok
    // window.location.assign('https://app.storyblok.com/oauth/app_redirect')
    await getStories()
  } else {
    // Init the stories
    await getStories()
  }
})
const notification = computed(() => {
  return store.notification
})

const getStories = async () => {
  const data = await useFetch(
    `https://api.storyblok.com/v2/cdn/stories?token=${clientToken}` // when you need stories in app
  )
  store.stories = data
}
</script>
<style>
.app__layout {
  height: 100vh;
}
.container__items {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: auto;
  height: 100%;
}
.sb-notification {
  margin: auto;
}
.notification {
  display: flex;
  justify-content: center;
  padding: 10px;
  position: absolute;
  right: 0;
  left: 0;
  z-index: 10;
}
</style>
