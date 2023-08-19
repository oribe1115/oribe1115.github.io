<script setup lang="ts">
const props = defineProps<{
    // Google Slidesで「ファイル > 共有 > ウェブに公開 > リンク」で得られるURL
    // スライドショー設定はここで除去するのでなんでもいい
    shareLink: string
}>()

const queryParamsForSlideshowSetting = '?start=false&loop=false'

const fullSizeUrl = new URL(props.shareLink)
fullSizeUrl.search = queryParamsForSlideshowSetting

const embedingUrl = new URL(props.shareLink)
embedingUrl.pathname = embedingUrl.pathname.replace('/pub', '/embed')
embedingUrl.search = queryParamsForSlideshowSetting
</script>

<template>
  <div class="container">
    <iframe :src="embedingUrl.toString()" class="iframe" />
    <div>
      <a :href="fullSizeUrl.toString()">open as website</a>
    </div>
  </div>
  
</template>

<style scoped>
.container {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.iframe {
  width: 100%;
  aspect-ratio: 16 / 9;
}
</style>