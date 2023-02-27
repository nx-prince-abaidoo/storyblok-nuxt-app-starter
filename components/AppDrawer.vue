<template>
  <div class="drawer">
    <SbButton
      :disabled="isNoData"
      class="drawer__button"
      label="New Translation"
      @click="openDrawer"
    />
    <SbSlideover :prevent-close="true" :is-open="isOpen" orientation="right">
      <SbModalHeader title="New Translation" />
      <SbModalContent v-if="isOpen">
        <div class="translation__form">
          <p>Hello World</p>
        </div>
      </SbModalContent>
      <SbModalFooter>
        <SbButton
          :is-loading="isLoading"
          label="Click me"
          variant="primary"
        />
        <SbButton label="Cancel" variant="tertiary" @click="closeDrawer" />
      </SbModalFooter>
    </SbSlideover>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useTranslationStore } from '../stores/index'

const store = useTranslationStore()
const isOpen = ref(false)
const isLoading = ref(false)

const isError = computed(() => {
  return store.isValidStoryForm || store.isValidLanguageForm
})
const isNoData = computed(() => {
  return store.stories.length === 0
})
const openDrawer = () => {
  isOpen.value = true
}
const closeDrawer = () => {
  isOpen.value = false
}

</script>
<style scoped>
.drawer {
  margin-top: auto;
  margin-bottom: auto;
}
.sb-modal-content {
  height: 100%;
}
</style>
