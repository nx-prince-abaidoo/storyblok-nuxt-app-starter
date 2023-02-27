<template>
  <div>
    <SbNotification
      :status="status"
      :title="title"
      :description="description"
    />
  </div>
</template>
<script setup>
defineProps({
  status: {
    type: String,
    default: 'positive',
  },
  title: {
    type: String,
    default: 'Title',
  },
  description: {
    type: String,
    default: '',
  },
})
</script>
