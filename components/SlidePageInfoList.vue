<script setup lang="ts">
import { SlidePageInfo } from './composables/slidePageInfo'

const props = defineProps<{
    slidePageInfos: SlidePageInfo[]
}>()
</script>

<template>
  <ul>
    <li v-for="{ title, url } of props.slidePageInfos" :key="url">
        <a :href=url>{{ title }}</a>
    </li>
  </ul>
</template>