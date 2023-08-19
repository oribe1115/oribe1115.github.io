<script setup lang="ts">
import { TargetSiteKey } from '../data/sitecardTargets'
import { OGPInfo } from './composables/ogp.data'
import { data } from './composables/ogp.data'

const props = defineProps<{
    siteKey: TargetSiteKey
}>()

const ogpInfo = data[props.siteKey] as OGPInfo
</script>

<template>
  <a :href="ogpInfo.url" class="container">
    <img :src="ogpInfo.image" class="image">
    <div class="content">
      <div class="title">{{ ogpInfo.title }}</div>
      <p class="description">{{ ogpInfo.description }}</p>
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
  width: 40rem;
  max-width: 100%;
  height: 10rem;
  border: 1px solid var(--vp-c-divider);
}
.image {
  /* height: 10rem; */
  height: 100%;
  width: 15rem;
  object-fit: cover;
}
.content {
  max-width: 100%;
  padding: 1rem;
  flex: 1 1 15rem;
  color: var(--vp-c-text-1);
  /* display: block; */
}
.title {
  color: var(--vp-c-text-1);
  font-weight: bold;
}
.description {
  /* max-height: 10rem; */
  /* max-height: 8rem; */
  /* margin-bottom: 0.25rem; */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  /* text-overflow: ellipsis; */
  overflow: hidden;
  -webkit-line-clamp: 3;
  word-break: break-all;
  color: var(--vp-c-text-2);
  /* font-size: 0.8rem;
  line-height: 1rem; */
}
.hostname {
  color: var(--vp-c-text-2);
  font-size: 0.8rem;
}
</style>