<script setup lang="ts">
const props = defineProps({
    url: String
})
</script>

<template>
  <p>Site Card: {{ props.url }}</p>
</template>