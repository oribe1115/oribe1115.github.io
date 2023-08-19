<script setup lang="ts">
import { data } from './composables/ogp.data'

const props = defineProps({
    url: String
})

</script>

<template>
  <p>Site Card: {{ data[props.url] }}</p>
</template>