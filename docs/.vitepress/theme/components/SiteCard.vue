<script setup lang="ts">
import { TargetSiteKey } from '../data/sitecardTargets'
import { OGPInfo } from './composables/ogp.data'
import { data } from './composables/ogp.data'

const props = defineProps<{
    siteKey: TargetSiteKey
}>()

const ogpInfo = (data[props.siteKey] ?? {}) as OGPInfo
</script>

<template>
  <a :href="ogpInfo.url" class="container">
    <img :src="ogpInfo.image" class="image">
    <div class="content">
      <div class="title">{{ ogpInfo.title }}</div>
      <div class="description">{{ ogpInfo.description }}</div>
      <div class="hostname">{{ ogpInfo.host }}</div>
    </div>
  </a>
</template>

<style scoped>
a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* width: 40rem; */
  max-width: 100%;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 1rem;
  overflow: hidden;
}
.image {
  height: 100%;
  max-height: 10rem;
}
.content {
  max-width: 100%;
  padding: 0.8rem;
  flex: 1 1 15rem;
  display: block;
}
.title {
  color: var(--vp-c-text-1);
  font-weight: bold;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
  word-break: break-all;
  margin-bottom: 0.5rem;
}
.description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3;
  word-break: break-all;
  color: var(--vp-c-text-2);
  font-size: 0.8rem;
  line-height: 1rem;
  margin-bottom: 0.25rem;
}
.hostname {
  color: var(--vp-c-text-2);
  font-size: 0.8rem;
}
</style>