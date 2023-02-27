<template>
  <div>
    <SbFormItem label="Stories" style="margin-bottom: 20px" :is-required="true">
      <SbSelect
        v-model="selectedStories"
        item-label="name"
        item-value="id"
        label="Select stories to translate"
        error-message="Select at least one story"
        :is-required="true"
        :error="isError"
        :options="stories"
        :multiple="true"
        :filterable="true"
        no-data-text="No data"
        :is-loading="false"
        loading-label="loading Label"
        :clearable="true"
        :disable-internal-filter="true"
        @hide="handleSelection"
      />
    </SbFormItem>
  </div>
</template>
<script setup>
import { useTranslationStore } from '../stores/index'

const store = useTranslationStore()
const selectedStories = ref([])

const handleSelection = () => {
  //TODO: handle selection of stories or item
}
</script>
